import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent24Component } from './simple-component24.component';

describe('SimpleComponent24Component', () => {
  let component: SimpleComponent24Component;
  let fixture: ComponentFixture<SimpleComponent24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
