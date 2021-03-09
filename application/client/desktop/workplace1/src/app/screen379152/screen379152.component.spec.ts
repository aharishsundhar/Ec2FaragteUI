import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen379152Component } from './screen379152.component';

describe('Screen379152Component', () => {
  let component: Screen379152Component;
  let fixture: ComponentFixture<Screen379152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen379152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen379152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});