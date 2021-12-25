import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent238Component } from './simple-component238.component';

describe('SimpleComponent238Component', () => {
  let component: SimpleComponent238Component;
  let fixture: ComponentFixture<SimpleComponent238Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent238Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
