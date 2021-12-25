import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent259Component } from './simple-component259.component';

describe('SimpleComponent259Component', () => {
  let component: SimpleComponent259Component;
  let fixture: ComponentFixture<SimpleComponent259Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent259Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
