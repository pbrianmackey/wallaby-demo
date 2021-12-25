import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent45Component } from './simple-component45.component';

describe('SimpleComponent45Component', () => {
  let component: SimpleComponent45Component;
  let fixture: ComponentFixture<SimpleComponent45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent45Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
