import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent1Component } from './simple-component1.component';

describe('SimpleComponent1Component', () => {
  let component: SimpleComponent1Component;
  let fixture: ComponentFixture<SimpleComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
