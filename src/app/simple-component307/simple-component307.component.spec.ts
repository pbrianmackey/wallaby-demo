import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent307Component } from './simple-component307.component';

describe('SimpleComponent307Component', () => {
  let component: SimpleComponent307Component;
  let fixture: ComponentFixture<SimpleComponent307Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent307Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
