import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent207Component } from './simple-component207.component';

describe('SimpleComponent207Component', () => {
  let component: SimpleComponent207Component;
  let fixture: ComponentFixture<SimpleComponent207Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent207Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
