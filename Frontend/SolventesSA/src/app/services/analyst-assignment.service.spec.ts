import { TestBed } from '@angular/core/testing';

import { AnalystAssignmentService } from './analyst-assignment.service';

describe('AnalystAssignmentService', () => {
  let service: AnalystAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalystAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
