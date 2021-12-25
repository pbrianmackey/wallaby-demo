import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent204Component } from './simple-component204.component';

describe('SimpleComponent204Component', () => {
  let component: SimpleComponent204Component;
  let fixture: ComponentFixture<SimpleComponent204Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent204Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
