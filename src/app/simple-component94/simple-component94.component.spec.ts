import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent94Component } from './simple-component94.component';

describe('SimpleComponent94Component', () => {
  let component: SimpleComponent94Component;
  let fixture: ComponentFixture<SimpleComponent94Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent94Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
