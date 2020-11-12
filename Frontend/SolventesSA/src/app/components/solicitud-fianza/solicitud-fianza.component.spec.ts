import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudFianzaComponent } from './solicitud-fianza.component';

describe('SolicitudFianzaComponent', () => {
  let component: SolicitudFianzaComponent;
  let fixture: ComponentFixture<SolicitudFianzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudFianzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudFianzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
