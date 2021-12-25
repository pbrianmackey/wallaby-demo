import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent284Component } from './simple-component284.component';

describe('SimpleComponent284Component', () => {
  let component: SimpleComponent284Component;
  let fixture: ComponentFixture<SimpleComponent284Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent284Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
