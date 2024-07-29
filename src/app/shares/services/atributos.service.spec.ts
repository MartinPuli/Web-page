import { TestBed } from '@angular/core/testing';

import { AtributosService } from './atributos.service';

describe('AtributosService', () => {
  let service: AtributosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtributosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
