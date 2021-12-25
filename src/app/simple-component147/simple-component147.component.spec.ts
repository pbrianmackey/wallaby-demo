import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent147Component } from './simple-component147.component';

describe('SimpleComponent147Component', () => {
  let component: SimpleComponent147Component;
  let fixture: ComponentFixture<SimpleComponent147Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent147Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
