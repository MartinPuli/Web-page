import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormatoFechaPipe } from '../../pipes/formato-fecha.pipe';
import { LimiteCaracteresPipe } from '../../pipes/limite-caracteres.pipe';
import { VentasService } from '../../services/ventas.service';
import { Venta } from '../../models/sales-model';

@Component({
  selector: 'app-panel-ganancias',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FormatoFechaPipe, LimiteCaracteresPipe],
  templateUrl: './panel-ganancias.component.html',
  styleUrl: './panel-ganancias.component.scss'
})
export class PanelGananciasComponent {
  private _apiVentas = inject(VentasService)
  simulacroVentas: Venta[] = []
  ventas = signal(this.simulacroVentas)

  ngOnInit(): void {
    this.simulacroVentas = this._apiVentas.getVentas()
    this.ventas.set(this.simulacroVentas)
  }

  cantidadVentasProceso = computed(()=>{
    let contador: number = 0
    this.ventas().forEach(venta => {
      if(venta.state == 'proceso') contador ++;
    });
    return contador
  })

  cantidadVentasCompletadas = computed(()=>{
    let contador: number = 0
    this.ventas().forEach(venta => {
      if(venta.state == 'completa') contador ++;
    });
    return contador
  })

  gananciasTotales = computed(()=>{
    let ganancias: number = 0
    this.ventas().forEach(venta => {
      if(venta.state == 'completa') ganancias += venta.price;
    });
    return ganancias
  })

}
