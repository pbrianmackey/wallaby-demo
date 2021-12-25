import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent224Component } from './simple-component224.component';

describe('SimpleComponent224Component', () => {
  let component: SimpleComponent224Component;
  let fixture: ComponentFixture<SimpleComponent224Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent224Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
