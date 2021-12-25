import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent400Component } from './simple-component400.component';

describe('SimpleComponent400Component', () => {
  let component: SimpleComponent400Component;
  let fixture: ComponentFixture<SimpleComponent400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
