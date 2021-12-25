import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent241Component } from './simple-component241.component';

describe('SimpleComponent241Component', () => {
  let component: SimpleComponent241Component;
  let fixture: ComponentFixture<SimpleComponent241Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent241Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
