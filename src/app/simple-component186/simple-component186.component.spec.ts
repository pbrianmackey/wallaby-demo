import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent186Component } from './simple-component186.component';

describe('SimpleComponent186Component', () => {
  let component: SimpleComponent186Component;
  let fixture: ComponentFixture<SimpleComponent186Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent186Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
