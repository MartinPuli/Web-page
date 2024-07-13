import { Component, computed, inject, signal } from '@angular/core';
import { Venta, VentaCompleta, VentaProducto } from '../../shares/models/sales-model';
import { VentasService } from '../../shares/services/ventas.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormatoFechaPipe } from '../../shares/pipes/formato-fecha.pipe';
import { FormatoFechaVentasPipe } from '../../shares/pipes/formato-fecha-ventas.pipe';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { IProduct } from '../../shares/models/producto-model';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-ventas-proceso',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormatoFechaPipe, FormatoFechaVentasPipe, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './ventas-proceso.component.html',
  styleUrl: './ventas-proceso.component.scss'
})
export class VentasProcesoComponent {

  private _apiVentas = inject(VentasService)
  private _apiProductos = inject(ApiProductosService)

  inputProceso: FormGroup
  inputCompleto: FormGroup

  ventasArray: VentaProducto[] = []
  signalVentas = signal(this.ventasArray)
  cargado: Boolean = false

  valorFiltradoProceso = signal("")
  valorFiltradoCompleto = signal("")

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


  constructor(private form: FormBuilder) {
    this.inputProceso = this.form.group({
      busqueda: ["", Validators.required]
    })
    this.inputCompleto = this.form.group({
      busqueda: ["", Validators.required]
    })
  }

  ngOnInit(): void {

    let ventasTraidas: Venta[] = this._apiVentas.getVentas()
    const requests = ventasTraidas.map(venta =>
      this._apiProductos.getProduct(venta.idProduct).pipe(
        map(producto => ({
          venta,
          producto
        }))
      )
    );

    forkJoin(requests).subscribe({
      next: (result: VentaProducto[]) => {
        this.ventasArray = result;
        this.signalVentas.set(this.ventasArray);
        this.cargado = true;
      },
      error: (error: any) => {
        console.error(error);
        this.cargado = true; // Establecer en true incluso si hay errores para evitar bloqueo de la interfaz
      }
    });
  }

  ngOnDestroy(): void {
    this.cargado = false
  }

  filtrar(input: 'proceso' | 'completa') {
    if (input == 'proceso')this.valorFiltradoProceso.set(this.inputProceso.get('busqueda')?.value.toLowerCase())
      else if (input == 'completa') this.valorFiltradoCompleto.set(this.inputCompleto.get('busqueda')?.value.toLowerCase())
  }

  destacarTermino(texto: string, terminoBuscado: string): string {
    if (!terminoBuscado) return texto;

    const regex = new RegExp(`(${terminoBuscado})`, 'gi');
    return texto.replace(regex, `<b>$1</b>`);
  }

}
