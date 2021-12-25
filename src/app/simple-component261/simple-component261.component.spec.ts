import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent261Component } from './simple-component261.component';

describe('SimpleComponent261Component', () => {
  let component: SimpleComponent261Component;
  let fixture: ComponentFixture<SimpleComponent261Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent261Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
