import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent67Component } from './simple-component67.component';

describe('SimpleComponent67Component', () => {
  let component: SimpleComponent67Component;
  let fixture: ComponentFixture<SimpleComponent67Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent67Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
