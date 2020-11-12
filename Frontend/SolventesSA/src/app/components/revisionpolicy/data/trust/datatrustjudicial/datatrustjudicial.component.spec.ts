import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatrustjudicialComponent } from './datatrustjudicial.component';

describe('DatatrustjudicialComponent', () => {
  let component: DatatrustjudicialComponent;
  let fixture: ComponentFixture<DatatrustjudicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatrustjudicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatrustjudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
