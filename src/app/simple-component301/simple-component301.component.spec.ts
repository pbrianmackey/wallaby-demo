import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent301Component } from './simple-component301.component';

describe('SimpleComponent301Component', () => {
  let component: SimpleComponent301Component;
  let fixture: ComponentFixture<SimpleComponent301Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent301Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
