import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicedemo2Component } from './servicedemo2.component';

describe('Servicedemo2Component', () => {
  let component: Servicedemo2Component;
  let fixture: ComponentFixture<Servicedemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicedemo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicedemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
