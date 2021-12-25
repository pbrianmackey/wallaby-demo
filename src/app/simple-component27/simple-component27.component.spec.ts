import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent27Component } from './simple-component27.component';

describe('SimpleComponent27Component', () => {
  let component: SimpleComponent27Component;
  let fixture: ComponentFixture<SimpleComponent27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
