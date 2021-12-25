import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent40Component } from './simple-component40.component';

describe('SimpleComponent40Component', () => {
  let component: SimpleComponent40Component;
  let fixture: ComponentFixture<SimpleComponent40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent40Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
