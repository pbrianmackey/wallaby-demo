import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent119Component } from './simple-component119.component';

describe('SimpleComponent119Component', () => {
  let component: SimpleComponent119Component;
  let fixture: ComponentFixture<SimpleComponent119Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent119Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
