import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent48Component } from './simple-component48.component';

describe('SimpleComponent48Component', () => {
  let component: SimpleComponent48Component;
  let fixture: ComponentFixture<SimpleComponent48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent48Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
