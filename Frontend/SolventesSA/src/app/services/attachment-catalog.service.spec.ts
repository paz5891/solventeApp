import { TestBed } from '@angular/core/testing';

import { AttachmentCatalogService } from './attachment-catalog.service';

describe('AttachmentCatalogService', () => {
  let service: AttachmentCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttachmentCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
