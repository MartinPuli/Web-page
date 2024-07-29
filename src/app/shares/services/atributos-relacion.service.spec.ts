import { TestBed } from '@angular/core/testing';

import { AtributosRelacionService } from './atributos-relacion.service';

describe('AtributosRelacionService', () => {
  let service: AtributosRelacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtributosRelacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
