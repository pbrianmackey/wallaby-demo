import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent103Component } from './simple-component103.component';

describe('SimpleComponent103Component', () => {
  let component: SimpleComponent103Component;
  let fixture: ComponentFixture<SimpleComponent103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent103Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
