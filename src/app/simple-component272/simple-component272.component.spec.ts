import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent272Component } from './simple-component272.component';

describe('SimpleComponent272Component', () => {
  let component: SimpleComponent272Component;
  let fixture: ComponentFixture<SimpleComponent272Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent272Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
