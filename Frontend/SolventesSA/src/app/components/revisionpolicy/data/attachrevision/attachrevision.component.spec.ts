import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachrevisionComponent } from './attachrevision.component';

describe('AttachrevisionComponent', () => {
  let component: AttachrevisionComponent;
  let fixture: ComponentFixture<AttachrevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachrevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachrevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
