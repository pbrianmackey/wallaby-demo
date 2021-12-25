import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent134Component } from './simple-component134.component';

describe('SimpleComponent134Component', () => {
  let component: SimpleComponent134Component;
  let fixture: ComponentFixture<SimpleComponent134Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent134Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
