import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent229Component } from './simple-component229.component';

describe('SimpleComponent229Component', () => {
  let component: SimpleComponent229Component;
  let fixture: ComponentFixture<SimpleComponent229Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent229Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
