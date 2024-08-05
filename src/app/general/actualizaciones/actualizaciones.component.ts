import { CommonModule, Location } from '@angular/common';
import { Component, inject, Input, input, signal } from '@angular/core';
import { ActivatedRoute, Params, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ActualizacionesService } from '../../shares/services/actualizaciones.service';
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { PreguntasService } from '../../shares/services/preguntas.service';
import { Actualizacion, ActualizacionCompleta, isProveedorActualizacionTipo0, isVendedorActualizacionTipo0, isVendedorActualizacionTipo1o2 } from '../../shares/models/actualizacion-model';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormatoFechaPipe } from '../../shares/pipes/formato-fecha.pipe';
import { forkJoin, map } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LinksService } from '../../shares/services/links.service';
import { VentasService } from '../../shares/services/ventas.service';

@Component({
  selector: 'app-actualizaciones',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, RouterOutlet, MatExpansionModule, FormatoFechaPipe, ReactiveFormsModule],
  templateUrl: './actualizaciones.component.html',
  styleUrl: './actualizaciones.component.scss'
})
export class ActualizacionesComponent {
  private _route = inject(ActivatedRoute)
  private _apiActualizaciones = inject(ActualizacionesService)
  private _apiProductos = inject(ApiProductosService)
  private _apiPreguntas = inject(PreguntasService)
  private _apiLinks = inject(LinksService)
  private _apiVentas = inject(VentasService)

  actualizaciones: ActualizacionCompleta[] = []

  respuestaForm: FormGroup

  isVendedor!: Boolean
  idUsuario!: number
  cargado = signal(false)
  readonly panelOpenState = signal(false);

  constructor(private form: FormBuilder, private _location: Location) {
    this.respuestaForm = this.form.group({
      respuesta: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this.isVendedor = params['tipo'] == 'vendedor'
          ? true
          : false
        this.idUsuario = Number(params['idUsuario'])
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }

  ngAfterViewInit(): void {
    let actualizacionesTraidas: Actualizacion[] = this.isVendedor ? this._apiActualizaciones.getActualizacionesVendedor(this.idUsuario) : this._apiActualizaciones.getActualizacionesProveedor(this.idUsuario)

    this.actualizaciones = actualizacionesTraidas.map(actualizacion => {
      return {
        actualizacion,
        producto: this._apiProductos.getProduct(actualizacion.idProducto),
        pregunta: isVendedorActualizacionTipo0(actualizacion) ? this._apiPreguntas.getPreguntaPorId(actualizacion.idPregunta) : isProveedorActualizacionTipo0(actualizacion) ? this._apiPreguntas.getPreguntaPorId(actualizacion.idPregunta) : undefined,
        respuesta: isVendedorActualizacionTipo0(actualizacion) ? this._apiPreguntas.getRespuestasPorId(actualizacion.idRespuesta) : undefined,
        venta: isVendedorActualizacionTipo1o2(actualizacion) ? this._apiVentas.getVentasPorId(actualizacion.idVenta) : undefined
      }
    });

    this.cargado.set(true)

    // forkJoin(requests).subscribe({
    //   next: (result: ActualizacionCompleta[]) => {
    //     this.actualizaciones = result
    //     this.cargado.set(true)
    //   },
    //   error: (error: any) => {
    //     console.error(error);
    //     this.cargado.set(true) 
    //   }
    // });
  }

  ngOnDestroy(): void {
    this.cargado.set(false)

  }

  linksAsociados(id: number) {
    return this._apiLinks.getCantidadLinksProducto(id)
  }

  responder() {

  }

  goBack() {
    this._location.back();
  }
}
