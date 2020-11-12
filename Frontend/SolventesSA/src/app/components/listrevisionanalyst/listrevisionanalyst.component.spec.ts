import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrevisionanalystComponent } from './listrevisionanalyst.component';

describe('ListrevisionanalystComponent', () => {
  let component: ListrevisionanalystComponent;
  let fixture: ComponentFixture<ListrevisionanalystComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListrevisionanalystComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrevisionanalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
