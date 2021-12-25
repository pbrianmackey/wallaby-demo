import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent370Component } from './simple-component370.component';

describe('SimpleComponent370Component', () => {
  let component: SimpleComponent370Component;
  let fixture: ComponentFixture<SimpleComponent370Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent370Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
