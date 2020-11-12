import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionpolicyComponent } from './revisionpolicy.component';

describe('RevisionpolicyComponent', () => {
  let component: RevisionpolicyComponent;
  let fixture: ComponentFixture<RevisionpolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionpolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
