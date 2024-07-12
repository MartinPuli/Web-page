import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormatoFechaPipe } from '../../shares/pipes/formato-fecha.pipe';
import { LimiteCaracteresPipe } from '../../shares/pipes/limite-caracteres.pipe';
import { VentasService } from '../../shares/services/ventas.service';
import { Venta, VentaProducto } from '../../shares/models/sales-model';
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { IProduct } from '../../shares/models/producto-model';

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

  ventasArray: VentaProducto[] = []
  ventas = signal(this.ventasArray)

  ngOnInit(): void {
    let ventasTraidas: Venta[] = this._apiVentas.getVentas()
    
    ventasTraidas.forEach(venta => {
      let productoRecibido!: IProduct 

      this._apiProductos.getProduct(venta.idProduct).subscribe({
        next: (data: IProduct) => {
          productoRecibido = data
        },
        error: (error: any) => {
          console.log(error)
        }
      })

      this.ventasArray.push({
        venta: venta,
        producto: productoRecibido
      })
    });

    this.ventas.set(this.ventasArray)
  }

  cantidadVentasProceso = computed(()=>{
    let contador: number = 0
    this.ventas().forEach(venta => {
      if(venta.venta.state == 'proceso') contador ++;
    });
    return contador
  })

  cantidadVentasCompletadas = computed(()=>{
    let contador: number = 0
    this.ventas().forEach(venta => {
      if(venta.venta.state == 'completa') contador ++;
    });
    return contador
  })

  gananciasTotales = computed(()=>{
    let ganancias: number = 0
    this.ventas().forEach(venta => {
      if(venta.venta.state == 'completa') ganancias += venta.producto.price;
    });
    return ganancias
  })

}
