import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatrustparticularComponent } from './datatrustparticular.component';

describe('DatatrustpartComponent', () => {
  let component: DatatrustparticularComponent;
  let fixture: ComponentFixture<DatatrustparticularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatrustparticularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatrustparticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
