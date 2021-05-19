import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drag3Component } from './drag3.component';

describe('Drag3Component', () => {
  let component: Drag3Component;
  let fixture: ComponentFixture<Drag3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Drag3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Drag3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
