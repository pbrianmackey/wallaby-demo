import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent252Component } from './simple-component252.component';

describe('SimpleComponent252Component', () => {
  let component: SimpleComponent252Component;
  let fixture: ComponentFixture<SimpleComponent252Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent252Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
