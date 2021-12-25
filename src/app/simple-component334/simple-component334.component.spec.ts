import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent334Component } from './simple-component334.component';

describe('SimpleComponent334Component', () => {
  let component: SimpleComponent334Component;
  let fixture: ComponentFixture<SimpleComponent334Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent334Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
