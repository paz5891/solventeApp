import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataagentComponent } from './dataagent.component';

describe('DataagentComponent', () => {
  let component: DataagentComponent;
  let fixture: ComponentFixture<DataagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
