import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabeneficiaryparticularComponent } from './databeneficiaryparticular.component';

describe('DatabeneficiaryparticularComponent', () => {
  let component: DatabeneficiaryparticularComponent;
  let fixture: ComponentFixture<DatabeneficiaryparticularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabeneficiaryparticularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabeneficiaryparticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
