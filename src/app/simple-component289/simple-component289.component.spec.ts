import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent289Component } from './simple-component289.component';

describe('SimpleComponent289Component', () => {
  let component: SimpleComponent289Component;
  let fixture: ComponentFixture<SimpleComponent289Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent289Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
