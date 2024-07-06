import { TestBed } from '@angular/core/testing';

import { FormatoFechaVentasService } from './formato-fecha-ventas.service';

describe('FormatoFechaVentasService', () => {
  let service: FormatoFechaVentasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatoFechaVentasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
