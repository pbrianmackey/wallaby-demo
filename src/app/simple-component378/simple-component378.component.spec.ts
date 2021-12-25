import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent378Component } from './simple-component378.component';

describe('SimpleComponent378Component', () => {
  let component: SimpleComponent378Component;
  let fixture: ComponentFixture<SimpleComponent378Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent378Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
