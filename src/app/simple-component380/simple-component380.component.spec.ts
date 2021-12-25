import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent380Component } from './simple-component380.component';

describe('SimpleComponent380Component', () => {
  let component: SimpleComponent380Component;
  let fixture: ComponentFixture<SimpleComponent380Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent380Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
