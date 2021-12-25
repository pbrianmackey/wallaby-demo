import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent80Component } from './simple-component80.component';

describe('SimpleComponent80Component', () => {
  let component: SimpleComponent80Component;
  let fixture: ComponentFixture<SimpleComponent80Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent80Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
