import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent5Component } from './simple-component5.component';

describe('SimpleComponent5Component', () => {
  let component: SimpleComponent5Component;
  let fixture: ComponentFixture<SimpleComponent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
