import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent117Component } from './simple-component117.component';

describe('SimpleComponent117Component', () => {
  let component: SimpleComponent117Component;
  let fixture: ComponentFixture<SimpleComponent117Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent117Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
