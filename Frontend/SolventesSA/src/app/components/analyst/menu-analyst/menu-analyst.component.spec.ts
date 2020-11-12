import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAnalystComponent } from './menu-analyst.component';

describe('MenuAnalystComponent', () => {
  let component: MenuAnalystComponent;
  let fixture: ComponentFixture<MenuAnalystComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAnalystComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
