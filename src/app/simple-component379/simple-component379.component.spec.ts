import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent379Component } from './simple-component379.component';

describe('SimpleComponent379Component', () => {
  let component: SimpleComponent379Component;
  let fixture: ComponentFixture<SimpleComponent379Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent379Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
