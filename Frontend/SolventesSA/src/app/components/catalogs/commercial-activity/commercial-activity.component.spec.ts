import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialActivityComponent } from './commercial-activity.component';

describe('CommercialActivityComponent', () => {
  let component: CommercialActivityComponent;
  let fixture: ComponentFixture<CommercialActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
