import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent151Component } from './simple-component151.component';

describe('SimpleComponent151Component', () => {
  let component: SimpleComponent151Component;
  let fixture: ComponentFixture<SimpleComponent151Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent151Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
