import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudPolizeShowDialogComponent } from './solicitud-polize-show-dialog.component';

describe('SolicitudPolizeShowDialogComponent', () => {
  let component: SolicitudPolizeShowDialogComponent;
  let fixture: ComponentFixture<SolicitudPolizeShowDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudPolizeShowDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudPolizeShowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
