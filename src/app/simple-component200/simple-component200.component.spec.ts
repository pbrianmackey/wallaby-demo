import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent200Component } from './simple-component200.component';

describe('SimpleComponent200Component', () => {
  let component: SimpleComponent200Component;
  let fixture: ComponentFixture<SimpleComponent200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent200Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
