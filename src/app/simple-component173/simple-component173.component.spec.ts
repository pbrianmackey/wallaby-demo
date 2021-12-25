import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent173Component } from './simple-component173.component';

describe('SimpleComponent173Component', () => {
  let component: SimpleComponent173Component;
  let fixture: ComponentFixture<SimpleComponent173Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent173Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
