import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent209Component } from './simple-component209.component';

describe('SimpleComponent209Component', () => {
  let component: SimpleComponent209Component;
  let fixture: ComponentFixture<SimpleComponent209Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent209Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
