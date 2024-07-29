import { TestBed } from '@angular/core/testing';

import { ImagenesAdicionalesService } from './imagenes-adicionales.service';

describe('ImagenesAdicionalesService', () => {
  let service: ImagenesAdicionalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenesAdicionalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
