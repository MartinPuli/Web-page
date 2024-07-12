import { TestBed } from '@angular/core/testing';

import { ActualizacionesService } from './actualizaciones.service';

describe('ActualizacionesVendedorService', () => {
  let service: ActualizacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualizacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
