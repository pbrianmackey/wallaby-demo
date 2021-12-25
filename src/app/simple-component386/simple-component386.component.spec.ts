import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent386Component } from './simple-component386.component';

describe('SimpleComponent386Component', () => {
  let component: SimpleComponent386Component;
  let fixture: ComponentFixture<SimpleComponent386Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent386Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
