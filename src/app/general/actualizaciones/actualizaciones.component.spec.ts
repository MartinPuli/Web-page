import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionesComponent } from './actualizaciones.component';

describe('ActualizacionesComponent', () => {
  let component: ActualizacionesComponent;
  let fixture: ComponentFixture<ActualizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
