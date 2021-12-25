import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent383Component } from './simple-component383.component';

describe('SimpleComponent383Component', () => {
  let component: SimpleComponent383Component;
  let fixture: ComponentFixture<SimpleComponent383Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent383Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
