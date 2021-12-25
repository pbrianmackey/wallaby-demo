import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent62Component } from './simple-component62.component';

describe('SimpleComponent62Component', () => {
  let component: SimpleComponent62Component;
  let fixture: ComponentFixture<SimpleComponent62Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent62Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
