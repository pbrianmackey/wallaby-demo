import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent81Component } from './simple-component81.component';

describe('SimpleComponent81Component', () => {
  let component: SimpleComponent81Component;
  let fixture: ComponentFixture<SimpleComponent81Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent81Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
