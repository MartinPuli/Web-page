import { CommonModule } from '@angular/common';
import { Component, computed, inject, Input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormatoFechaPipe } from '../../shares/pipes/formato-fecha.pipe';
import { LimiteCaracteresPipe } from '../../shares/pipes/limite-caracteres.pipe';
import { VentasService } from '../../shares/services/ventas.service';
import { Venta, VentaProducto } from '../../shares/models/sales-model';
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { IProduct } from '../../shares/models/producto-model';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-panel-ganancias',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FormatoFechaPipe, LimiteCaracteresPipe],
  templateUrl: './panel-ganancias.component.html',
  styleUrl: './panel-ganancias.component.scss'
})
export class PanelGananciasComponent {
  private _apiVentas = inject(VentasService)
  private _apiProductos = inject(ApiProductosService)

  @Input() isVendedor!: Boolean
  @Input() idUsuario!: number

  ventasArray: VentaProducto[] = []
  ventas = signal(this.ventasArray)
  cargado = signal(false)

  ngOnInit(): void {
    let ventasTraidas: Venta[] = this.isVendedor ? this._apiVentas.getVentasPorVendedor(this.idUsuario) : this._apiVentas.getVentasPorProveedor(this.idUsuario)

    this.ventas.set(ventasTraidas.map(venta => {
      return {
        venta,
        producto: this._apiProductos.getProduct(venta.idProduct)
      }
    }))
    this.cargado.set(true)
  }

  ngOnDestroy(): void {
    this.cargado.set(false)
  }

  cantidadVentasProceso = computed(() => {
    let contador: number = 0
    this.ventas().forEach(venta => {
      if (venta.venta.state == 'proceso') contador++;
    });
    return contador
  })

  cantidadVentasCompletadas = computed(() => {
    let contador: number = 0
    this.ventas().forEach(venta => {
      if (venta.venta.state == 'completa') contador++;
    });
    return contador
  })

  gananciasTotales = computed(() => {
    let ganancias: number = 0
    this.ventas().forEach(venta => {
      if (venta.venta.state == 'completa') ganancias += venta.producto.precio;
    });
    return ganancias
  })

  gananciasVendedorTotales = computed(() => {
    let ganancias: number = 0
    this.ventas().forEach(venta => {
      if (venta.venta.state == 'completa') ganancias += venta.venta.precioVenta - venta.producto.precio;
    });
    return ganancias
  })

}
