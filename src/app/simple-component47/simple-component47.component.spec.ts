import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent47Component } from './simple-component47.component';

describe('SimpleComponent47Component', () => {
  let component: SimpleComponent47Component;
  let fixture: ComponentFixture<SimpleComponent47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent47Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
