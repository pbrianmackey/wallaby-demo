import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent18Component } from './simple-component18.component';

describe('SimpleComponent18Component', () => {
  let component: SimpleComponent18Component;
  let fixture: ComponentFixture<SimpleComponent18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
