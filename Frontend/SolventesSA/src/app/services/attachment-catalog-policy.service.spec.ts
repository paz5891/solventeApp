import { TestBed } from '@angular/core/testing';

import { AttachmentCatalogPolicyService } from './attachment-catalog-policy.service';

describe('AttachmentCatalogPolicyService', () => {
  let service: AttachmentCatalogPolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttachmentCatalogPolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
