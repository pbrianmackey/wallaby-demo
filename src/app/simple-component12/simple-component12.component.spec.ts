import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent12Component } from './simple-component12.component';

describe('SimpleComponent12Component', () => {
  let component: SimpleComponent12Component;
  let fixture: ComponentFixture<SimpleComponent12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
