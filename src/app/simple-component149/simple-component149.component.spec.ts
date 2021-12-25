import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent149Component } from './simple-component149.component';

describe('SimpleComponent149Component', () => {
  let component: SimpleComponent149Component;
  let fixture: ComponentFixture<SimpleComponent149Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent149Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
