import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent20Component } from './simple-component20.component';

describe('SimpleComponent20Component', () => {
  let component: SimpleComponent20Component;
  let fixture: ComponentFixture<SimpleComponent20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
