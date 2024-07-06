import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasProcesoComponent } from './ventas-proceso.component';

describe('VentasProcesoComponent', () => {
  let component: VentasProcesoComponent;
  let fixture: ComponentFixture<VentasProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasProcesoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
