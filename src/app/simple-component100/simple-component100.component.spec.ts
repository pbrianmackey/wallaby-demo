import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent100Component } from './simple-component100.component';

describe('SimpleComponent100Component', () => {
  let component: SimpleComponent100Component;
  let fixture: ComponentFixture<SimpleComponent100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
