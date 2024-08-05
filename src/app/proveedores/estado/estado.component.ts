import { Component, computed, inject, Input, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { VentasService } from '../../shares/services/ventas.service';
import { estadoProducto } from '../../shares/models/producto-model';
import { CommonModule } from '@angular/common';
import { Agregar0Pipe } from '../../shares/pipes/agregar0.pipe';
import { RelacionClaveService } from '../../shares/services/relacion-clave.service';
import { LinksService } from '../../shares/services/links.service';
import { PreguntasService } from '../../shares/services/preguntas.service';
import { respuesta } from '../../shares/models/preguntas-model';

@Component({
  selector: 'app-estado',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive, Agregar0Pipe],
  templateUrl: './estado.component.html',
  styleUrl: './estado.component.scss'
})
export class EstadoComponent {

  @Input() idProveedor!: number

  private _apiProductos = inject(ApiProductosService)
  private _apiVentas = inject(VentasService)
  private _apiClaves = inject(RelacionClaveService)
  private _apiLinks = inject(LinksService)
  private _apiPreguntas = inject(PreguntasService)

  inputEstado: FormGroup
  respuestaForm: FormGroup
  estadoVentas!: estadoProducto[]
  interacciones: Boolean = true
  cargadoPreguntas: Boolean = false

  constructor(private form: FormBuilder) {
    this.inputEstado = this.form.group({
      busqueda: ["", Validators.required]
    })
    this.respuestaForm = this.form.group({
      respuesta: ["", Validators.required]
    })
  }


  valorFiltradoEstado = signal("")

  estadoVentasMostradas = computed(() => {
    return this.estadoVentas.filter((productoVenta) => {
      return productoVenta.producto.nombre.toLowerCase().includes(this.valorFiltradoEstado())
    })
  })

  ngOnInit(): void {
    this.estadoVentas = this._apiProductos.getProductsByProveedor(this.idProveedor).map(producto => {
      let respuestasParciales: respuesta[][] = []
      this._apiPreguntas.getPreguntasPorProducto(producto.id).forEach((pregunta) => {
        respuestasParciales.push(this._apiPreguntas.getRespuestasPorPregunta(pregunta.idPregunta))
      })

      return {
        producto,
        cantidadProceso: this._apiVentas.getVentasProcesoPorProducto(producto.id),
        cantidadCompletas: this._apiVentas.getVentasCompletasPorProducto(producto.id),
        palabrasClaves: this._apiClaves.getPalabrasClavePorProducto(producto.id),
        cantidadLinks: this._apiLinks.getCantidadLinksProducto(producto.id),
        interacciones: true,
        preguntas: this._apiPreguntas.getPreguntasPorProducto(producto.id),
        respuestas: respuestasParciales
      }
    }
    )
  }

  ngAfterContentChecked(): void {
    this.cargadoPreguntas = true
  }

  filtrar() {
    this.valorFiltradoEstado.set(this.inputEstado.get('busqueda')?.value.toLowerCase())
  }

  responder(idPregunta: number) {

  }
}
