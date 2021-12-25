import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent74Component } from './simple-component74.component';

describe('SimpleComponent74Component', () => {
  let component: SimpleComponent74Component;
  let fixture: ComponentFixture<SimpleComponent74Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent74Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
