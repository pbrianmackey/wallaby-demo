import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent299Component } from './simple-component299.component';

describe('SimpleComponent299Component', () => {
  let component: SimpleComponent299Component;
  let fixture: ComponentFixture<SimpleComponent299Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent299Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
