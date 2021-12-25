import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent346Component } from './simple-component346.component';

describe('SimpleComponent346Component', () => {
  let component: SimpleComponent346Component;
  let fixture: ComponentFixture<SimpleComponent346Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent346Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
