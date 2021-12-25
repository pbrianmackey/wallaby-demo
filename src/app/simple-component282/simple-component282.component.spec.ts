import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent282Component } from './simple-component282.component';

describe('SimpleComponent282Component', () => {
  let component: SimpleComponent282Component;
  let fixture: ComponentFixture<SimpleComponent282Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent282Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
