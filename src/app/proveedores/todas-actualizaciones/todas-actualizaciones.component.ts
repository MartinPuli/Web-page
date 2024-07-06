import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Actualizacion } from '../../models/actualizacion-model';
import { DetallesComponent } from '../detalles/detalles.component';
import { FormatoFechaPipe } from '../../pipes/formato-fecha.pipe';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-todas-actualizaciones',
  templateUrl: './todas-actualizaciones.component.html',
  styleUrls: ['./todas-actualizaciones.component.scss'],
  standalone: true,
  imports: [
    CommonModule, // Para directivas angulares estándar
    MatDialogModule, // Módulo necesario para el diálogo
    DetallesComponent, // Importar el componente Detalle como un componente standalone
    MatCardModule,
    FormatoFechaPipe
  ]
})
export class TodasActualizacionesComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: Actualizacion[], private dialog: MatDialog) {
    
  }

  abrirDetalle(actualizacion: Actualizacion): void {
    this.dialog.open(DetallesComponent, {
      width: '400px',
      data: actualizacion
    });
  }
}

