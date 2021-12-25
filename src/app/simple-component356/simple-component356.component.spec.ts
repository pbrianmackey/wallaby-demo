import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent356Component } from './simple-component356.component';

describe('SimpleComponent356Component', () => {
  let component: SimpleComponent356Component;
  let fixture: ComponentFixture<SimpleComponent356Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent356Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
