import { TestBed } from '@angular/core/testing';

import { ActualizacionesVendedorService } from './actualizaciones-vendedor.service';

describe('ActualizacionesVendedorService', () => {
  let service: ActualizacionesVendedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualizacionesVendedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
