import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent214Component } from './simple-component214.component';

describe('SimpleComponent214Component', () => {
  let component: SimpleComponent214Component;
  let fixture: ComponentFixture<SimpleComponent214Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent214Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
