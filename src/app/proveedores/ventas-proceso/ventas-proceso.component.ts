import { Component, computed, inject, signal } from '@angular/core';
import { Venta, VentaProceso } from '../../models/sales-model';
import { VentasService } from '../../services/ventas.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormatoFechaPipe } from '../../pipes/formato-fecha.pipe';
import { FormatoFechaVentasPipe } from '../../pipes/formato-fecha-ventas.pipe';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ventas-proceso',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormatoFechaPipe, FormatoFechaVentasPipe, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './ventas-proceso.component.html',
  styleUrl: './ventas-proceso.component.scss'
})
export class VentasProcesoComponent {

  private _apiVentas = inject(VentasService)

  inputProceso: FormGroup
  inputCompleto: FormGroup

  ventasTraidas: Venta[] = []
  signalVentas = signal(this.ventasTraidas)
  valorFiltradoProceso = signal("")
  valorFiltradoCompleto = signal("")

  ventasProceso = computed(() => {
    return this.signalVentas().filter((venta) => {
      return venta.state == "proceso" && venta.product.toLowerCase().includes(this.valorFiltradoProceso())
    })
  })

  ventasCompleto = computed(() => {
    return this.signalVentas().filter((venta) => {
      return venta.state == "completa" && venta.product.toLowerCase().includes(this.valorFiltradoCompleto())
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
    this.ventasTraidas = this._apiVentas.getVentas()
    this.signalVentas.set(this.ventasTraidas)
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
