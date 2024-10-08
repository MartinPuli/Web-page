import { Component, Output, Signal, ViewChild, computed, inject, signal, viewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Actualizacion } from '../../shares/models/actualizacion-model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from '../detalles/detalles.component';
import { FormatoFechaPipe } from '../../shares/pipes/formato-fecha.pipe';
import { LogrosComponent } from '../../general/logros/logros.component';
import { VentasService } from '../../shares/services/ventas.service';
import { Venta } from '../../shares/models/sales-model';
import { LimiteCaracteresPipe } from '../../shares/pipes/limite-caracteres.pipe';
import { EventEmitter } from 'stream';
import { PanelGananciasComponent } from '../../general/panel-ganancias/panel-ganancias.component';
import { ActualizacionesService } from '../../shares/services/actualizaciones.service';
import { EstadoComponent } from '../estado/estado.component';
import { HeaderComponent } from '../../general/header/header.component';

@Component({
  selector: 'app-home-proveedor',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive, MatDialogModule, CommonModule, DetallesComponent, FormatoFechaPipe, LogrosComponent, LimiteCaracteresPipe, PanelGananciasComponent, EstadoComponent, HeaderComponent],
  templateUrl: './home-proveedor.component.html',
  styleUrl: './home-proveedor.component.scss'
})
export class HomeProveedorComponent {

  private _route = inject(ActivatedRoute)
  ganancias = signal(0)
  simulacroActualizaciones: Actualizacion[] = []
  actualizaciones = signal(this.simulacroActualizaciones)
  _apiActualizaciones = inject(ActualizacionesService)
  idUsuario!: number

  actualizacionesMostradas = computed(() => {
    const arrayParcial: Actualizacion[] = this.actualizaciones()
    return arrayParcial.length > 3
      ? arrayParcial.sort((a, b) => b.fecha.getTime() - a.fecha.getTime()).slice(0, 3)
      : arrayParcial
  })

  @ViewChild(PanelGananciasComponent) child!: PanelGananciasComponent;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this.idUsuario = Number(params['idUsuario'])
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }
  ngAfterViewInit(): void {
    this.simulacroActualizaciones = this._apiActualizaciones.getActualizacionesProveedor(this.idUsuario)
    this.actualizaciones.set(this.simulacroActualizaciones)
  }

  ngAfterViewChecked(): void {
    this.ganancias.set(this.child.gananciasTotales())
  }


  abrirDetalle(actualizacion: Actualizacion): void {
    this.dialog.open(DetallesComponent, {
      width: '500px',
      data: actualizacion
    });
  }
}
