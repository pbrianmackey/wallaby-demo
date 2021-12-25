import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent56Component } from './simple-component56.component';

describe('SimpleComponent56Component', () => {
  let component: SimpleComponent56Component;
  let fixture: ComponentFixture<SimpleComponent56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent56Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
