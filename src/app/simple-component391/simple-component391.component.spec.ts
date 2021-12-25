import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent391Component } from './simple-component391.component';

describe('SimpleComponent391Component', () => {
  let component: SimpleComponent391Component;
  let fixture: ComponentFixture<SimpleComponent391Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent391Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
