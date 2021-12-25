import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent331Component } from './simple-component331.component';

describe('SimpleComponent331Component', () => {
  let component: SimpleComponent331Component;
  let fixture: ComponentFixture<SimpleComponent331Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent331Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
