import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent215Component } from './simple-component215.component';

describe('SimpleComponent215Component', () => {
  let component: SimpleComponent215Component;
  let fixture: ComponentFixture<SimpleComponent215Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent215Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
