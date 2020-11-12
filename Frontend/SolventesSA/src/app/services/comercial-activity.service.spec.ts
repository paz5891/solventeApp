import { TestBed } from '@angular/core/testing';

import { ComercialActivityService } from './comercial-activity.service';

describe('ComercialActivityService', () => {
  let service: ComercialActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComercialActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
