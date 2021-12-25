import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent126Component } from './simple-component126.component';

describe('SimpleComponent126Component', () => {
  let component: SimpleComponent126Component;
  let fixture: ComponentFixture<SimpleComponent126Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent126Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
