import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent75Component } from './simple-component75.component';

describe('SimpleComponent75Component', () => {
  let component: SimpleComponent75Component;
  let fixture: ComponentFixture<SimpleComponent75Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent75Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
