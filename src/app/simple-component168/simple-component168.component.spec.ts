import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent168Component } from './simple-component168.component';

describe('SimpleComponent168Component', () => {
  let component: SimpleComponent168Component;
  let fixture: ComponentFixture<SimpleComponent168Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent168Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
