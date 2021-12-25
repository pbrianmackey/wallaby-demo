import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent199Component } from './simple-component199.component';

describe('SimpleComponent199Component', () => {
  let component: SimpleComponent199Component;
  let fixture: ComponentFixture<SimpleComponent199Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent199Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
