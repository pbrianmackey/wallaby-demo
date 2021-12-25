import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent319Component } from './simple-component319.component';

describe('SimpleComponent319Component', () => {
  let component: SimpleComponent319Component;
  let fixture: ComponentFixture<SimpleComponent319Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent319Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
