import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudPolizeEditComponent } from './solicitud-polize-edit.component';

describe('SolicitudPolizeEditComponent', () => {
  let component: SolicitudPolizeEditComponent;
  let fixture: ComponentFixture<SolicitudPolizeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudPolizeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudPolizeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
