import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent106Component } from './simple-component106.component';

describe('SimpleComponent106Component', () => {
  let component: SimpleComponent106Component;
  let fixture: ComponentFixture<SimpleComponent106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent106Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
