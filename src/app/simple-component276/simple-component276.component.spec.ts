import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent276Component } from './simple-component276.component';

describe('SimpleComponent276Component', () => {
  let component: SimpleComponent276Component;
  let fixture: ComponentFixture<SimpleComponent276Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent276Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
