import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasActualizacionesComponent } from './todas-actualizaciones.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormatoFechaPipe } from '../../shares/pipes/formato-fecha.pipe';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from '../detalles/detalles.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TodasActualizacionesComponent', () => {
  let component: TodasActualizacionesComponent;
  let fixture: ComponentFixture<TodasActualizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule, // Para directivas angulares estándar
        MatDialogModule, // Módulo necesario para el diálogo // Importar el componente Detalle como un componente standalone
        MatCardModule,
        FormatoFechaPipe, 
        TodasActualizacionesComponent, 
        DetallesComponent,
        HttpClientTestingModule],
      declarations:[],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue:{}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodasActualizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
