import { TestBed } from '@angular/core/testing';

import { LogrosService } from './logros.service';

describe('LogrosService', () => {
  let service: LogrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
