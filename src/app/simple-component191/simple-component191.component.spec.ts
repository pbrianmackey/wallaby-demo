import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent191Component } from './simple-component191.component';

describe('SimpleComponent191Component', () => {
  let component: SimpleComponent191Component;
  let fixture: ComponentFixture<SimpleComponent191Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent191Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
