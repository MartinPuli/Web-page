import { Component, computed, inject, Signal, signal } from '@angular/core';
import { Venta, VentaCompleta, VentaProducto } from '../../shares/models/sales-model';
import { VentasService } from '../../shares/services/ventas.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormatoFechaPipe } from '../../shares/pipes/formato-fecha.pipe';
import { FormatoFechaVentasPipe } from '../../shares/pipes/formato-fecha-ventas.pipe';
import { ActivatedRoute, Params, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { IProduct } from '../../shares/models/producto-model';
import { forkJoin, map, Observable } from 'rxjs';
import { LinksService } from '../../shares/services/links.service';
import { link, linkCompleto } from '../../shares/models/links-model';

@Component({
  selector: 'app-ventas-proceso',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormatoFechaPipe, FormatoFechaVentasPipe, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.scss'
})
export class VentasComponent {

  private _apiVentas = inject(VentasService)
  private _apiProductos = inject(ApiProductosService)
  private _route = inject(ActivatedRoute)
  private _links = inject(LinksService)

  inputProceso: FormGroup
  inputCompleto: FormGroup
  inputLinks: FormGroup

  ventasArray!: VentaProducto[]
  signalVentas = signal(this.ventasArray)
  linksTraidos!: linkCompleto[]
  linksVendedor = signal(this.linksTraidos)
  cargado: Boolean = false
  isVendedor!: Boolean

  valorFiltradoProceso = signal("")
  valorFiltradoCompleto = signal("")
  valorFiltradoLinks = signal("")

  ventasProceso = computed(() => {
    return this.signalVentas().filter((venta) => {
      return venta.venta.state == "proceso" && venta.producto.title.toLowerCase().includes(this.valorFiltradoProceso())
    })
  })

  ventasCompleto = computed(() => {
    return this.signalVentas().filter((venta) => {
      return venta.venta.state == "completa" && venta.producto.title.toLowerCase().includes(this.valorFiltradoCompleto())
    })
  })

  linksVendedorFiltrados = computed(() => {
    return this.linksVendedor().filter((link) => {
      return link.producto.title.toLowerCase().includes(this.valorFiltradoLinks())
    })
  })


  constructor(private form: FormBuilder) {
    this.inputProceso = this.form.group({
      busqueda: ["", Validators.required]
    })
    this.inputCompleto = this.form.group({
      busqueda: ["", Validators.required]
    })
    this.inputLinks = this.form.group({
      busqueda: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this.isVendedor = params['tipo'] == 'vendedor' ? true : false;
        console.log('isVendedor:', this.isVendedor);

        let ventasTraidas: Venta[] = this.isVendedor ? this._apiVentas.getVentasPorVendedor(1) : this._apiVentas.getVentasPorProveedor(2);

        const requests = ventasTraidas.map(venta =>
          this._apiProductos.getProduct(venta.idProduct).pipe(
            map(producto => ({
              venta,
              producto
            }))
          )
        )
        

        forkJoin(requests).subscribe({
          next: (result) => {
            this.ventasArray = result
            this.signalVentas.set(this.ventasArray)
            if(!this.isVendedor)this.cargado = true;
          },
          error: (error: any) => {
            console.error(error);
            this.cargado = true;
          }
        });

        if(this.isVendedor){
          let links = this._links.getLinksPorVendedor(1)

          const requestsLinks = links.map(link =>
            this._apiProductos.getProduct(link.idProduct).pipe(
              map(producto => ({
                link,
                producto
              }))
            )
          )

          forkJoin(requestsLinks).subscribe({
            next: (result) => {
              this.linksTraidos = result
              this.linksVendedor.set(this.linksTraidos)
              this.cargado = true;
            },
            error: (error: any) => {
              console.error(error);
              this.cargado = true;
            }
          });
        }

      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  ngOnDestroy(): void {
    this.cargado = false
  }



  filtrar(input: 'proceso' | 'completa' | 'links') {
    if (input == 'proceso') this.valorFiltradoProceso.set(this.inputProceso.get('busqueda')?.value.toLowerCase())
    else if (input == 'completa') this.valorFiltradoCompleto.set(this.inputCompleto.get('busqueda')?.value.toLowerCase())
    else if (input == 'links') this.valorFiltradoLinks.set(this.inputLinks.get('busqueda')?.value.toLowerCase())
  }

  destacarTermino(texto: string, terminoBuscado: string): string {
    if (!terminoBuscado) return texto;

    const regex = new RegExp(`(${terminoBuscado})`, 'gi');
    return texto.replace(regex, `<b>$1</b>`);
  }

}
