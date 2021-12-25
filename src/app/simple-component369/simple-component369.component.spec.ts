import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent369Component } from './simple-component369.component';

describe('SimpleComponent369Component', () => {
  let component: SimpleComponent369Component;
  let fixture: ComponentFixture<SimpleComponent369Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent369Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
