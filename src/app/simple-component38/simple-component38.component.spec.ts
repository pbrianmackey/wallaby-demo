import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent38Component } from './simple-component38.component';

describe('SimpleComponent38Component', () => {
  let component: SimpleComponent38Component;
  let fixture: ComponentFixture<SimpleComponent38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent38Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
