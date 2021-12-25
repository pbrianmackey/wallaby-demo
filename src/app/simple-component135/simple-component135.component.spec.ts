import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent135Component } from './simple-component135.component';

describe('SimpleComponent135Component', () => {
  let component: SimpleComponent135Component;
  let fixture: ComponentFixture<SimpleComponent135Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent135Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
