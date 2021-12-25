import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent180Component } from './simple-component180.component';

describe('SimpleComponent180Component', () => {
  let component: SimpleComponent180Component;
  let fixture: ComponentFixture<SimpleComponent180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent180Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
