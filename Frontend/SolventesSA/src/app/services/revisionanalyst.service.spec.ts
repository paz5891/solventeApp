import { TestBed } from '@angular/core/testing';

import { RevisionanalystService } from './revisionanalyst.service';

describe('RevisionanalystService', () => {
  let service: RevisionanalystService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevisionanalystService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
