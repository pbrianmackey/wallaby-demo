import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent292Component } from './simple-component292.component';

describe('SimpleComponent292Component', () => {
  let component: SimpleComponent292Component;
  let fixture: ComponentFixture<SimpleComponent292Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent292Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
