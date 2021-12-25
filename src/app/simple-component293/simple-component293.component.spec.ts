import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent293Component } from './simple-component293.component';

describe('SimpleComponent293Component', () => {
  let component: SimpleComponent293Component;
  let fixture: ComponentFixture<SimpleComponent293Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent293Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
