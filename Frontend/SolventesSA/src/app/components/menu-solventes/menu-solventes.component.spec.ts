import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSolventesComponent } from './menu-solventes.component';

describe('MenuSolventesComponent', () => {
  let component: MenuSolventesComponent;
  let fixture: ComponentFixture<MenuSolventesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSolventesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSolventesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
