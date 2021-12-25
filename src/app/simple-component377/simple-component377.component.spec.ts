import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent377Component } from './simple-component377.component';

describe('SimpleComponent377Component', () => {
  let component: SimpleComponent377Component;
  let fixture: ComponentFixture<SimpleComponent377Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent377Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
