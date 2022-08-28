import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foorter01Component } from './foorter01.component';

describe('Foorter01Component', () => {
  let component: Foorter01Component;
  let fixture: ComponentFixture<Foorter01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Foorter01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Foorter01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
