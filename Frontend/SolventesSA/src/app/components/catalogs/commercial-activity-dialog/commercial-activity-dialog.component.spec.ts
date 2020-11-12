import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialActivityDialogComponent } from './commercial-activity-dialog.component';

describe('CommercialActivityDialogComponent', () => {
  let component: CommercialActivityDialogComponent;
  let fixture: ComponentFixture<CommercialActivityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialActivityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialActivityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
