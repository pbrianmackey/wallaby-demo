import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent77Component } from './simple-component77.component';

describe('SimpleComponent77Component', () => {
  let component: SimpleComponent77Component;
  let fixture: ComponentFixture<SimpleComponent77Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent77Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
