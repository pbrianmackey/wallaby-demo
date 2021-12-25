import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent318Component } from './simple-component318.component';

describe('SimpleComponent318Component', () => {
  let component: SimpleComponent318Component;
  let fixture: ComponentFixture<SimpleComponent318Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent318Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
