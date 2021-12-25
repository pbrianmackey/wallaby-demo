import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent34Component } from './simple-component34.component';

describe('SimpleComponent34Component', () => {
  let component: SimpleComponent34Component;
  let fixture: ComponentFixture<SimpleComponent34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent34Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
