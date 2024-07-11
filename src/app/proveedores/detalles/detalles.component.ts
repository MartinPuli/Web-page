import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Actualizacion } from '../../shares/models/actualizacion-model';
import { FormatoFechaPipe } from '../../shares/pipes/formato-fecha.pipe';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormatoFechaPipe] // Importar CommonModule para usar directivas como *ngIf, *ngFor, etc.
})
export class DetallesComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Actualizacion) {}
}
