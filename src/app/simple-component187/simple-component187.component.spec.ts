import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent187Component } from './simple-component187.component';

describe('SimpleComponent187Component', () => {
  let component: SimpleComponent187Component;
  let fixture: ComponentFixture<SimpleComponent187Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent187Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
