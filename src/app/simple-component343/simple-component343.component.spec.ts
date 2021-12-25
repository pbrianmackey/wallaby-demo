import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent343Component } from './simple-component343.component';

describe('SimpleComponent343Component', () => {
  let component: SimpleComponent343Component;
  let fixture: ComponentFixture<SimpleComponent343Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent343Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
