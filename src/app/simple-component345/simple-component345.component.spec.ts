import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent345Component } from './simple-component345.component';

describe('SimpleComponent345Component', () => {
  let component: SimpleComponent345Component;
  let fixture: ComponentFixture<SimpleComponent345Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent345Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
