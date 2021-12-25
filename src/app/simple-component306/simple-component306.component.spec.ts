import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent306Component } from './simple-component306.component';

describe('SimpleComponent306Component', () => {
  let component: SimpleComponent306Component;
  let fixture: ComponentFixture<SimpleComponent306Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent306Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
