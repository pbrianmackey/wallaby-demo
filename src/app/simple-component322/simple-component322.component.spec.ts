import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent322Component } from './simple-component322.component';

describe('SimpleComponent322Component', () => {
  let component: SimpleComponent322Component;
  let fixture: ComponentFixture<SimpleComponent322Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent322Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
