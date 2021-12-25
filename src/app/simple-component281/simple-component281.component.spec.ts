import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent281Component } from './simple-component281.component';

describe('SimpleComponent281Component', () => {
  let component: SimpleComponent281Component;
  let fixture: ComponentFixture<SimpleComponent281Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent281Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
