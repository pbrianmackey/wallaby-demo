import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent255Component } from './simple-component255.component';

describe('SimpleComponent255Component', () => {
  let component: SimpleComponent255Component;
  let fixture: ComponentFixture<SimpleComponent255Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent255Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
