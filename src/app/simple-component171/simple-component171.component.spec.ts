import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent171Component } from './simple-component171.component';

describe('SimpleComponent171Component', () => {
  let component: SimpleComponent171Component;
  let fixture: ComponentFixture<SimpleComponent171Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent171Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
