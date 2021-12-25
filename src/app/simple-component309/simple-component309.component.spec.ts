import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent309Component } from './simple-component309.component';

describe('SimpleComponent309Component', () => {
  let component: SimpleComponent309Component;
  let fixture: ComponentFixture<SimpleComponent309Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent309Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
