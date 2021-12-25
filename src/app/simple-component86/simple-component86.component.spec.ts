import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent86Component } from './simple-component86.component';

describe('SimpleComponent86Component', () => {
  let component: SimpleComponent86Component;
  let fixture: ComponentFixture<SimpleComponent86Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent86Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
