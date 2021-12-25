import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent368Component } from './simple-component368.component';

describe('SimpleComponent368Component', () => {
  let component: SimpleComponent368Component;
  let fixture: ComponentFixture<SimpleComponent368Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent368Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
