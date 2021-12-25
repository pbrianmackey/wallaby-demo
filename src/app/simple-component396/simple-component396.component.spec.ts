import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent396Component } from './simple-component396.component';

describe('SimpleComponent396Component', () => {
  let component: SimpleComponent396Component;
  let fixture: ComponentFixture<SimpleComponent396Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent396Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
