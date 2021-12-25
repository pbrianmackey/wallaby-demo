import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent144Component } from './simple-component144.component';

describe('SimpleComponent144Component', () => {
  let component: SimpleComponent144Component;
  let fixture: ComponentFixture<SimpleComponent144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent144Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
