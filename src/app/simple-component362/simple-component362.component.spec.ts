import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent362Component } from './simple-component362.component';

describe('SimpleComponent362Component', () => {
  let component: SimpleComponent362Component;
  let fixture: ComponentFixture<SimpleComponent362Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent362Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
