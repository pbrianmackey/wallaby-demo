import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent21Component } from './simple-component21.component';

describe('SimpleComponent21Component', () => {
  let component: SimpleComponent21Component;
  let fixture: ComponentFixture<SimpleComponent21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
