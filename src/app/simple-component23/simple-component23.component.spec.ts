import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent23Component } from './simple-component23.component';

describe('SimpleComponent23Component', () => {
  let component: SimpleComponent23Component;
  let fixture: ComponentFixture<SimpleComponent23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
