import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent223Component } from './simple-component223.component';

describe('SimpleComponent223Component', () => {
  let component: SimpleComponent223Component;
  let fixture: ComponentFixture<SimpleComponent223Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent223Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
