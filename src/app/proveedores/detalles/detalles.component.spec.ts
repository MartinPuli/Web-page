import { TestBed } from '@angular/core/testing';
import { DetallesComponent } from './detalles.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormatoFechaPipe } from '../../shares/pipes/formato-fecha.pipe';
import { Actualizacion } from '../../modelos/actualizacion.model';

describe('DetallesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatDialogModule, DetallesComponent, FormatoFechaPipe],
      declarations: [],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(DetallesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have a data property', () => {
    const fixture = TestBed.createComponent(DetallesComponent);
    const component = fixture.componentInstance;
    expect(component.data).toBeDefined();
  });

  // Add more tests as needed
});