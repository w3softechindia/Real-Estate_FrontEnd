import { TestBed } from '@angular/core/testing';

import { RealEStateService } from './real-estate.service';

describe('RealEStateService', () => {
  let service: RealEStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealEStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
