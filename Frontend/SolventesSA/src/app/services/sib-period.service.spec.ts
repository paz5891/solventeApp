import { TestBed } from '@angular/core/testing';

import { SibPeriodService } from './sib-period.service';

describe('SibPeriodService', () => {
  let service: SibPeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SibPeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
