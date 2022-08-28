import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar01Component } from './navbar01.component';

describe('Navbar01Component', () => {
  let component: Navbar01Component;
  let fixture: ComponentFixture<Navbar01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navbar01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbar01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
