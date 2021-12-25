import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent60Component } from './simple-component60.component';

describe('SimpleComponent60Component', () => {
  let component: SimpleComponent60Component;
  let fixture: ComponentFixture<SimpleComponent60Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent60Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
