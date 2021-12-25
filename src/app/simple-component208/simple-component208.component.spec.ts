import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent208Component } from './simple-component208.component';

describe('SimpleComponent208Component', () => {
  let component: SimpleComponent208Component;
  let fixture: ComponentFixture<SimpleComponent208Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent208Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
