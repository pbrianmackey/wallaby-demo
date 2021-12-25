import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent279Component } from './simple-component279.component';

describe('SimpleComponent279Component', () => {
  let component: SimpleComponent279Component;
  let fixture: ComponentFixture<SimpleComponent279Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent279Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
