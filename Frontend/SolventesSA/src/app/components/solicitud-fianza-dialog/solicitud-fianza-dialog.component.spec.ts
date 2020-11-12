import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudFianzaDialogComponent } from './solicitud-fianza-dialog.component';

describe('SolicitudFianzaDialogComponent', () => {
  let component: SolicitudFianzaDialogComponent;
  let fixture: ComponentFixture<SolicitudFianzaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudFianzaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudFianzaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
