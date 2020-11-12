import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaListarUsuariosComponent } from './vista-listar-usuarios.component';

describe('VistaListarUsuariosComponent', () => {
  let component: VistaListarUsuariosComponent;
  let fixture: ComponentFixture<VistaListarUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaListarUsuariosComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaListarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
