import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent269Component } from './simple-component269.component';

describe('SimpleComponent269Component', () => {
  let component: SimpleComponent269Component;
  let fixture: ComponentFixture<SimpleComponent269Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent269Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
