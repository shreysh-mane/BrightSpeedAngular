import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandelformComponent } from './handelform.component';

describe('HandelformComponent', () => {
  let component: HandelformComponent;
  let fixture: ComponentFixture<HandelformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandelformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandelformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
