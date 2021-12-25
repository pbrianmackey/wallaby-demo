import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent132Component } from './simple-component132.component';

describe('SimpleComponent132Component', () => {
  let component: SimpleComponent132Component;
  let fixture: ComponentFixture<SimpleComponent132Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent132Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
