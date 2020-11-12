import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoEmisionComponent } from './periodo-emision.component';

describe('PeriodoEmisionComponent', () => {
  let component: PeriodoEmisionComponent;
  let fixture: ComponentFixture<PeriodoEmisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoEmisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoEmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
