import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent179Component } from './simple-component179.component';

describe('SimpleComponent179Component', () => {
  let component: SimpleComponent179Component;
  let fixture: ComponentFixture<SimpleComponent179Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent179Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
