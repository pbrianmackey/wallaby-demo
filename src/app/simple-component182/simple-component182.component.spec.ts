import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent182Component } from './simple-component182.component';

describe('SimpleComponent182Component', () => {
  let component: SimpleComponent182Component;
  let fixture: ComponentFixture<SimpleComponent182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
