import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent232Component } from './simple-component232.component';

describe('SimpleComponent232Component', () => {
  let component: SimpleComponent232Component;
  let fixture: ComponentFixture<SimpleComponent232Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent232Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
