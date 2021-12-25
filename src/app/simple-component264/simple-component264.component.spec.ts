import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent264Component } from './simple-component264.component';

describe('SimpleComponent264Component', () => {
  let component: SimpleComponent264Component;
  let fixture: ComponentFixture<SimpleComponent264Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent264Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
