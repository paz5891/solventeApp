import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoDialogComponent } from './periodo-dialog.component';

describe('PeriodoDialogComponent', () => {
  let component: PeriodoDialogComponent;
  let fixture: ComponentFixture<PeriodoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
