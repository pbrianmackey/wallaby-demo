import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent254Component } from './simple-component254.component';

describe('SimpleComponent254Component', () => {
  let component: SimpleComponent254Component;
  let fixture: ComponentFixture<SimpleComponent254Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent254Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
