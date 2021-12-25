import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent36Component } from './simple-component36.component';

describe('SimpleComponent36Component', () => {
  let component: SimpleComponent36Component;
  let fixture: ComponentFixture<SimpleComponent36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent36Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
