import { Component, computed, inject, Signal, signal } from '@angular/core';
import { Venta, VentaCompleta, VentaProducto } from '../../shares/models/sales-model';
import { VentasService } from '../../shares/services/ventas.service';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormatoFechaPipe } from '../../shares/pipes/formato-fecha.pipe';
import { FormatoFechaVentasPipe } from '../../shares/pipes/formato-fecha-ventas.pipe';
import { ActivatedRoute, Params, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { forkJoin, map, Observable } from 'rxjs';
import { LinksService } from '../../shares/services/links.service';
import { link, linkCompleto } from '../../shares/models/links-model';
import { RatesService } from '../../shares/services/rates.service';

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
  private _apiRates = inject(RatesService)
  private _route = inject(ActivatedRoute)
  private _links = inject(LinksService)

  inputProceso: FormGroup
  inputCompleto: FormGroup
  inputLinks: FormGroup

  ventasArray: VentaProducto[] = []
  signalVentas = signal(this.ventasArray)
  linksTraidos: linkCompleto[] = []
  linksVendedor = signal(this.linksTraidos)
  cargado: Boolean = false
  linksCargado: Boolean = false
  isVendedor!: Boolean
  idUsuario!: number

  valorFiltradoProceso = signal("")
  valorFiltradoCompleto = signal("")
  valorFiltradoLinks = signal("")

  ventasProceso = computed(() => {
    return this.signalVentas().filter((venta) => {
      return venta.venta.state == "proceso" && venta.producto.nombre.toLowerCase().includes(this.valorFiltradoProceso())
    })
  })

  ventasCompleto = computed(() => {
    return this.signalVentas().filter((venta) => {
      return venta.venta.state == "completa" && venta.producto.nombre.toLowerCase().includes(this.valorFiltradoCompleto())
    })
  })

  linksVendedorFiltrados = computed(() => {
    return this.linksVendedor().filter((link) => {
      return link.producto.nombre.toLowerCase().includes(this.valorFiltradoLinks())
    })
  })


  constructor(private form: FormBuilder, private _location: Location) {
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
        this.idUsuario = Number(params['idUsuario'])

        let ventasTraidas: Venta[] = this.isVendedor ? this._apiVentas.getVentasPorVendedor(this.idUsuario) : this._apiVentas.getVentasPorProveedor(this.idUsuario);

        if (ventasTraidas.length) {
          this.signalVentas.set(ventasTraidas.map(venta => {
            return {
              venta,
              producto: this._apiProductos.getProduct(venta.idProduct)
            }
          }
          ))
          this.cargado = true

        } else {
          this.cargado = true
        }

        if (this.isVendedor) {
          let links: link[] = this._links.getLinksPorVendedor(this.idUsuario)
          let ratingParcial = 0

          if (links.length) {
            this.linksVendedor.set(links.map(link => {
              return {
                link,
                producto: this._apiProductos.getProduct(link.idProduct),
                rating: this._apiRates.getRatesProducto(link.idProduct).length
                  ? this._apiRates.getRatesProducto(link.idProduct).reduce((a,b)=> a + b, 0) / this._apiRates.getRatesProducto(link.idProduct).length
                  : null
              }
            }
            ))
            this.linksCargado = true;

            // forkJoin(requestsLinks).subscribe({
            //   next: (result) => {
            //     this.linksTraidos = result
            //     this.linksVendedor.set(this.linksTraidos)
            //     this.linksCargado = true;
            //   },
            //   error: (error: any) => {
            //     console.error(error);
            //     this.linksCargado = true;
            //   }
            // });
          } else {
            this.linksCargado = true
          }
        } else {
          this.linksCargado = true
        }

      },
      error: (error: any) => {
        console.log(error);
        this.cargado = true
        this.linksCargado = true
      }
    });
  }

  ngOnDestroy(): void {
    this.cargado = false
    this.linksCargado = false
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

  goBack() {
    this._location.back();
  }
}
