import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicedemo1Component } from './servicedemo1.component';

describe('Servicedemo1Component', () => {
  let component: Servicedemo1Component;
  let fixture: ComponentFixture<Servicedemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicedemo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicedemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
