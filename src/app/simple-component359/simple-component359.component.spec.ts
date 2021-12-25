import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent359Component } from './simple-component359.component';

describe('SimpleComponent359Component', () => {
  let component: SimpleComponent359Component;
  let fixture: ComponentFixture<SimpleComponent359Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent359Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
