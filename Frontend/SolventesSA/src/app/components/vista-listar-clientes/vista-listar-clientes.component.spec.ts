import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaListarClientesComponent } from './vista-listar-clientes.component';


describe('VistaListarClientesComponent', () => {
  let component: VistaListarClientesComponent;
  let fixture: ComponentFixture<VistaListarClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaListarClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaListarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
