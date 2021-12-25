import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent382Component } from './simple-component382.component';

describe('SimpleComponent382Component', () => {
  let component: SimpleComponent382Component;
  let fixture: ComponentFixture<SimpleComponent382Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent382Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
