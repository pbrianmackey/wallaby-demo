import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent405Component } from './simple-component405.component';

describe('SimpleComponent405Component', () => {
  let component: SimpleComponent405Component;
  let fixture: ComponentFixture<SimpleComponent405Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent405Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
