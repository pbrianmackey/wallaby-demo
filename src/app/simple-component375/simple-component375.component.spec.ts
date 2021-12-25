import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent375Component } from './simple-component375.component';

describe('SimpleComponent375Component', () => {
  let component: SimpleComponent375Component;
  let fixture: ComponentFixture<SimpleComponent375Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent375Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
