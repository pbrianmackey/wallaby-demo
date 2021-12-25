import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent235Component } from './simple-component235.component';

describe('SimpleComponent235Component', () => {
  let component: SimpleComponent235Component;
  let fixture: ComponentFixture<SimpleComponent235Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent235Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
