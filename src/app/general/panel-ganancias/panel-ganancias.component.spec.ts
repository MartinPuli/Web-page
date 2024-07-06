import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelGananciasComponent } from './panel-ganancias.component';

describe('PanelGananciasComponent', () => {
  let component: PanelGananciasComponent;
  let fixture: ComponentFixture<PanelGananciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelGananciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelGananciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
