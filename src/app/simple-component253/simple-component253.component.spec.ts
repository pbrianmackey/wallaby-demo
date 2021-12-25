import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent253Component } from './simple-component253.component';

describe('SimpleComponent253Component', () => {
  let component: SimpleComponent253Component;
  let fixture: ComponentFixture<SimpleComponent253Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent253Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
