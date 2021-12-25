import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent140Component } from './simple-component140.component';

describe('SimpleComponent140Component', () => {
  let component: SimpleComponent140Component;
  let fixture: ComponentFixture<SimpleComponent140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent140Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
