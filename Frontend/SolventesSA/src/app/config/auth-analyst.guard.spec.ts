import { TestBed } from '@angular/core/testing';

import { AuthAnalystGuard } from './auth-analyst.guard';

describe('AuthAnalystGuard', () => {
  let guard: AuthAnalystGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthAnalystGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
