import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent195Component } from './simple-component195.component';

describe('SimpleComponent195Component', () => {
  let component: SimpleComponent195Component;
  let fixture: ComponentFixture<SimpleComponent195Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent195Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
