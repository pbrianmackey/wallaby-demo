import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent17Component } from './simple-component17.component';

describe('SimpleComponent17Component', () => {
  let component: SimpleComponent17Component;
  let fixture: ComponentFixture<SimpleComponent17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
