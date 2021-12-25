import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent205Component } from './simple-component205.component';

describe('SimpleComponent205Component', () => {
  let component: SimpleComponent205Component;
  let fixture: ComponentFixture<SimpleComponent205Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent205Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
