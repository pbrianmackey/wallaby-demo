import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent88Component } from './simple-component88.component';

describe('SimpleComponent88Component', () => {
  let component: SimpleComponent88Component;
  let fixture: ComponentFixture<SimpleComponent88Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent88Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
