import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent114Component } from './simple-component114.component';

describe('SimpleComponent114Component', () => {
  let component: SimpleComponent114Component;
  let fixture: ComponentFixture<SimpleComponent114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent114Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
