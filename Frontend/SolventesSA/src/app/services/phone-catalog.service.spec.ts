import { TestBed } from '@angular/core/testing';

import { PhoneCatalogService } from './phone-catalog.service';

describe('PhoneCatalogService', () => {
  let service: PhoneCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
