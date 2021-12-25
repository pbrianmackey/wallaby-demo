import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent89Component } from './simple-component89.component';

describe('SimpleComponent89Component', () => {
  let component: SimpleComponent89Component;
  let fixture: ComponentFixture<SimpleComponent89Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent89Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
