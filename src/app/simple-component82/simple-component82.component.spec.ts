import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent82Component } from './simple-component82.component';

describe('SimpleComponent82Component', () => {
  let component: SimpleComponent82Component;
  let fixture: ComponentFixture<SimpleComponent82Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent82Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
