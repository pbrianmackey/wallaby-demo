import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent72Component } from './simple-component72.component';

describe('SimpleComponent72Component', () => {
  let component: SimpleComponent72Component;
  let fixture: ComponentFixture<SimpleComponent72Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent72Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
