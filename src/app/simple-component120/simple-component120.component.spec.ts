import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent120Component } from './simple-component120.component';

describe('SimpleComponent120Component', () => {
  let component: SimpleComponent120Component;
  let fixture: ComponentFixture<SimpleComponent120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent120Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
