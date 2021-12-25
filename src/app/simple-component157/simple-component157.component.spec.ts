import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent157Component } from './simple-component157.component';

describe('SimpleComponent157Component', () => {
  let component: SimpleComponent157Component;
  let fixture: ComponentFixture<SimpleComponent157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent157Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
