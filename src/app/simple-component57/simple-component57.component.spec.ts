import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent57Component } from './simple-component57.component';

describe('SimpleComponent57Component', () => {
  let component: SimpleComponent57Component;
  let fixture: ComponentFixture<SimpleComponent57Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent57Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
