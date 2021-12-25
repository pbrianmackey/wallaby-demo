import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent348Component } from './simple-component348.component';

describe('SimpleComponent348Component', () => {
  let component: SimpleComponent348Component;
  let fixture: ComponentFixture<SimpleComponent348Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent348Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
