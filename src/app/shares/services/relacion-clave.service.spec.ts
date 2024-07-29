import { TestBed } from '@angular/core/testing';

import { RelacionClaveService } from './relacion-clave.service';

describe('RelacionClaveService', () => {
  let service: RelacionClaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelacionClaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
