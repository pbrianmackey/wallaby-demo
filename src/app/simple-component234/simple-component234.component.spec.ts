import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent234Component } from './simple-component234.component';

describe('SimpleComponent234Component', () => {
  let component: SimpleComponent234Component;
  let fixture: ComponentFixture<SimpleComponent234Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent234Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
