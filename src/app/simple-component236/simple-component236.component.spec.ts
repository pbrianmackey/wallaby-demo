import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent236Component } from './simple-component236.component';

describe('SimpleComponent236Component', () => {
  let component: SimpleComponent236Component;
  let fixture: ComponentFixture<SimpleComponent236Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent236Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
