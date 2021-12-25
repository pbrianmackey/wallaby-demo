import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent202Component } from './simple-component202.component';

describe('SimpleComponent202Component', () => {
  let component: SimpleComponent202Component;
  let fixture: ComponentFixture<SimpleComponent202Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent202Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
