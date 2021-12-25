import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent277Component } from './simple-component277.component';

describe('SimpleComponent277Component', () => {
  let component: SimpleComponent277Component;
  let fixture: ComponentFixture<SimpleComponent277Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent277Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
