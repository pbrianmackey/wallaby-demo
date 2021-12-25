import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent69Component } from './simple-component69.component';

describe('SimpleComponent69Component', () => {
  let component: SimpleComponent69Component;
  let fixture: ComponentFixture<SimpleComponent69Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent69Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
