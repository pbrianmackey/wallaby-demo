import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent139Component } from './simple-component139.component';

describe('SimpleComponent139Component', () => {
  let component: SimpleComponent139Component;
  let fixture: ComponentFixture<SimpleComponent139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent139Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
