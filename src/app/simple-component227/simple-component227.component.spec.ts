import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent227Component } from './simple-component227.component';

describe('SimpleComponent227Component', () => {
  let component: SimpleComponent227Component;
  let fixture: ComponentFixture<SimpleComponent227Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent227Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
