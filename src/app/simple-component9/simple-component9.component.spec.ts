import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent9Component } from './simple-component9.component';

describe('SimpleComponent9Component', () => {
  let component: SimpleComponent9Component;
  let fixture: ComponentFixture<SimpleComponent9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
