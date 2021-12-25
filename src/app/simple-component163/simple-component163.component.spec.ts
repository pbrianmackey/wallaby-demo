import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent163Component } from './simple-component163.component';

describe('SimpleComponent163Component', () => {
  let component: SimpleComponent163Component;
  let fixture: ComponentFixture<SimpleComponent163Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent163Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
