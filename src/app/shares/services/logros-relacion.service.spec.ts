import { TestBed } from '@angular/core/testing';

import { LogrosRelacionService } from './logros-relacion.service';

describe('LogrosRelacionService', () => {
  let service: LogrosRelacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogrosRelacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
