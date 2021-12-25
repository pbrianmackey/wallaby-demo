import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent320Component } from './simple-component320.component';

describe('SimpleComponent320Component', () => {
  let component: SimpleComponent320Component;
  let fixture: ComponentFixture<SimpleComponent320Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent320Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
