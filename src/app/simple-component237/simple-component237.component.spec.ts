import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent237Component } from './simple-component237.component';

describe('SimpleComponent237Component', () => {
  let component: SimpleComponent237Component;
  let fixture: ComponentFixture<SimpleComponent237Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent237Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
