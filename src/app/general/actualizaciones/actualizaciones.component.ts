import { CommonModule } from '@angular/common';
import { Component, inject, Input, input, signal } from '@angular/core';
import { ActivatedRoute, Params, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ActualizacionesService } from '../../shares/services/actualizaciones.service';
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { PreguntasService } from '../../shares/services/preguntas.service';
import { Actualizacion, ActualizacionCompleta, isProveedorActualizacionTipo0, isVendedorActualizacionTipo0 } from '../../shares/models/actualizacion-model';
import { IProduct } from '../../shares/models/producto-model';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormatoFechaPipe } from '../../shares/pipes/formato-fecha.pipe';
import { forkJoin, map } from 'rxjs';

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
  cargado = signal(false)
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
    let actualizacionesTraidad: Actualizacion[] = this._apiActualizaciones.getActualizacionesUsuario(this.user)
    
    const requests = actualizacionesTraidad.map(actualizacion =>
      this._apiProductos.getProduct(actualizacion.idProducto).pipe(
        map(producto => ({
          actualizacion,
          producto,
          pregunta: isVendedorActualizacionTipo0(actualizacion)? this._apiPreguntas.getPreguntaPorId(actualizacion.idPregunta) : isProveedorActualizacionTipo0(actualizacion)? this._apiPreguntas.getPreguntaPorId(actualizacion.idPregunta) : undefined,
          respuesta: isVendedorActualizacionTipo0(actualizacion)? this._apiPreguntas.getRespuestasPorId(actualizacion.idRespuesta) : undefined
        }))
      )
    );

    forkJoin(requests).subscribe({
      next: (result: ActualizacionCompleta[]) => {
        this.actualizaciones = result
        this.cargado.set(true)
      },
      error: (error: any) => {
        console.error(error);
        this.cargado.set(true) // Establecer en true incluso si hay errores para evitar bloqueo de la interfaz
      }
    });
  }

  ngOnDestroy(): void {
    this.cargado.set(false)
    
  }
}
