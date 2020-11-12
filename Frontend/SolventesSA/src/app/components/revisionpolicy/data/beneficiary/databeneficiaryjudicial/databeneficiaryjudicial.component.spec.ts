import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabeneficiaryjudicialComponent } from './databeneficiaryjudicial.component';

describe('DatabeneficiaryjudicialComponent', () => {
  let component: DatabeneficiaryjudicialComponent;
  let fixture: ComponentFixture<DatabeneficiaryjudicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabeneficiaryjudicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabeneficiaryjudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
