import { Component, Output, Signal, ViewChild, computed, inject, signal, viewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Actualizacion } from '../../shares/models/actualizacion-model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from '../detalles/detalles.component';
import { TodasActualizacionesComponent } from '../todas-actualizaciones/todas-actualizaciones.component';
import { FormatoFechaPipe } from '../../shares/pipes/formato-fecha.pipe';
import { LogrosComponent } from '../../general/logros/logros.component';
import { VentasService } from '../../shares/services/ventas.service';
import { Venta } from '../../shares/models/sales-model';
import { LimiteCaracteresPipe } from '../../shares/pipes/limite-caracteres.pipe';
import { EventEmitter } from 'stream';
import { PanelGananciasComponent } from '../../general/panel-ganancias/panel-ganancias.component';

@Component({
  selector: 'app-home-proveedor',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive, MatDialogModule, CommonModule, DetallesComponent, TodasActualizacionesComponent, FormatoFechaPipe, LogrosComponent, LimiteCaracteresPipe, PanelGananciasComponent],
  templateUrl: './home-proveedor.component.html',
  styleUrl: './home-proveedor.component.scss'
})
export class HomeProveedorComponent{

  ganancias = signal(0)

  @ViewChild(PanelGananciasComponent) child!: PanelGananciasComponent;

  ngAfterViewInit(): void {
     this.ganancias.set(this.child.gananciasTotales())
  }

  constructor(private dialog: MatDialog) {}

  actualizaciones = signal([
    { titulo: "Actualización 1", descripcion: "Descripción de la Actualización 1", fecha: new Date('2023-01-01') },
    { titulo: "Actualización 2", descripcion: "Descripción de la Actualización 2", fecha: new Date('2023-01-05') },
    { titulo: "Actualización 3", descripcion: "Descripción de la Actualización 3", fecha: new Date('2023-01-10') },
    { titulo: "Actualización 4", descripcion: "Descripción de la Actualización 4", fecha: new Date('2023-02-01') },
    { titulo: "Actualización 5", descripcion: "Descripción de la Actualización 5", fecha: new Date('2023-02-15') },
    { titulo: "Actualización 6", descripcion: "Descripción de la Actualización 6", fecha: new Date('2023-03-01') },
    { titulo: "Actualización 7", descripcion: "Descripción de la Actualización 7", fecha: new Date('2023-03-20') },
    { titulo: "Actualización 8", descripcion: "Descripción de la Actualización 8", fecha: new Date('2023-04-01') },
    { titulo: "Actualización 9", descripcion: "Descripción de la Actualización 9", fecha: new Date('2023-04-10') },
    { titulo: "Actualización 10", descripcion: "Descripción de la Actualización 10", fecha: new Date('2023-05-01') }
  ])

  actualizacionesMostradas = computed(()=>{
    let arrayParcial: Actualizacion[] = this.actualizaciones()
    return arrayParcial.sort((a,b)=>b.fecha.getTime() - a.fecha.getTime()).slice(0,4)
  })

  abrirTodasActualizaciones(): void {
    this.dialog.open(TodasActualizacionesComponent, {
      width: '600px',
      height: '50%',
      data: this.actualizaciones()
    });
  }

  abrirDetalle(actualizacion: Actualizacion): void {
    this.dialog.open(DetallesComponent, {
      width: '500px',
      data: actualizacion
    });
  }
}
