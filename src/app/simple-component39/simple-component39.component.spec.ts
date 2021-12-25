import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent39Component } from './simple-component39.component';

describe('SimpleComponent39Component', () => {
  let component: SimpleComponent39Component;
  let fixture: ComponentFixture<SimpleComponent39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent39Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
