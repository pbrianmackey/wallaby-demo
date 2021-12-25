import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent304Component } from './simple-component304.component';

describe('SimpleComponent304Component', () => {
  let component: SimpleComponent304Component;
  let fixture: ComponentFixture<SimpleComponent304Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent304Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
