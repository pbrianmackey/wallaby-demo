import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent33Component } from './simple-component33.component';

describe('SimpleComponent33Component', () => {
  let component: SimpleComponent33Component;
  let fixture: ComponentFixture<SimpleComponent33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent33Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
