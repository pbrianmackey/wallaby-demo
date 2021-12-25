import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent169Component } from './simple-component169.component';

describe('SimpleComponent169Component', () => {
  let component: SimpleComponent169Component;
  let fixture: ComponentFixture<SimpleComponent169Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent169Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
