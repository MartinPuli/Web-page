import { CommonModule } from '@angular/common';
import { Component, computed, inject, Input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormatoFechaPipe } from '../../shares/pipes/formato-fecha.pipe';
import { LimiteCaracteresPipe } from '../../shares/pipes/limite-caracteres.pipe';
import { VentasService } from '../../shares/services/ventas.service';
import { Venta, VentaProducto } from '../../shares/models/sales-model';
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { forkJoin, map } from 'rxjs';
import { ScriptsService } from '../../shares/services/js/scripts.service';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

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
  private _scripts = inject(ScriptsService)
  private breakpointObserver = inject(BreakpointObserver)

  @Input() isVendedor!: Boolean
  @Input() idUsuario!: number

  ventasArray: VentaProducto[] = []
  ventas = signal(this.ventasArray)
  cargado = signal(false)
  isPantallaMas600: boolean = true
  responsiveLimit!: number

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

  ngAfterContentInit(): void {
    switch (true) {
      case this.breakpointObserver.isMatched('(min-width: 600px)'):
        this.responsiveLimit = 27
        break;
      default:
        this.responsiveLimit = 24
        break;
    }
    this.isPantallaMas600 = this.breakpointObserver.isMatched('(min-width: 600px)');
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
