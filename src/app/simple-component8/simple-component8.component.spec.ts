import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent8Component } from './simple-component8.component';

describe('SimpleComponent8Component', () => {
  let component: SimpleComponent8Component;
  let fixture: ComponentFixture<SimpleComponent8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
