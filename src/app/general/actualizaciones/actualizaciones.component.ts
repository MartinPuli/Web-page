import { CommonModule } from '@angular/common';
import { Component, inject, Input, input, signal } from '@angular/core';
import { ActivatedRoute, Params, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ActualizacionesService } from '../../shares/services/actualizaciones.service';
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { PreguntasService } from '../../shares/services/preguntas.service';
import { ActualizacionCompleta, isProveedorActualizacionTipo0, isVendedorActualizacionTipo0 } from '../../shares/models/actualizacion-model';
import { IProduct } from '../../shares/models/producto-model';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormatoFechaPipe } from '../../shares/pipes/formato-fecha.pipe';

@Component({
  selector: 'app-actualizaciones',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, RouterOutlet, MatExpansionModule, FormatoFechaPipe],
  templateUrl: './actualizaciones.component.html',
  styleUrl: './actualizaciones.component.scss'
})
export class ActualizacionesComponent {
  private _route = inject(ActivatedRoute)
  private _apiActualizaciones = inject(ActualizacionesService)
  private _apiProductos = inject(ApiProductosService)
  private _apiPreguntas = inject(PreguntasService)

  actualizaciones: ActualizacionCompleta[] = []
  
  isVendedor!: Boolean
  user!: number
  readonly panelOpenState = signal(false);

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this.isVendedor = params['tipo'] == 'vendedor'
          ? true
          : false
        this.user = this.isVendedor? 1 : 2
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }

  ngAfterViewInit(): void {
    this._apiActualizaciones.getActualizacionesUsuario(this.user).forEach((actualizacion, index) => {
      let productoObtenido!: IProduct
      this._apiProductos.getProduct(actualizacion.idProducto).subscribe({
        next: (data: IProduct) => {
          productoObtenido = data
        },
        error: (error: any) => {
          console.log(error)
        }
      })
      
      let actualizacionEntrante = {
        actualizacion: actualizacion,
        producto: productoObtenido,
        pregunta: isVendedorActualizacionTipo0(actualizacion)? this._apiPreguntas.getPreguntaPorId(actualizacion.idPregunta) : isProveedorActualizacionTipo0(actualizacion)? this._apiPreguntas.getPreguntaPorId(actualizacion.idPregunta) : undefined,
        respuesta: isVendedorActualizacionTipo0(actualizacion)? this._apiPreguntas.getRespuestasPorId(actualizacion.idRespuesta) : undefined
      }

      this.actualizaciones.push(actualizacionEntrante)
    })
  }
}
