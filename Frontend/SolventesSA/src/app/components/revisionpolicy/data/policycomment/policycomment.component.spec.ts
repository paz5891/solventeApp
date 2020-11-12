import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicycommentComponent } from './policycomment.component';

describe('PolicycommentComponent', () => {
  let component: PolicycommentComponent;
  let fixture: ComponentFixture<PolicycommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicycommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicycommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
