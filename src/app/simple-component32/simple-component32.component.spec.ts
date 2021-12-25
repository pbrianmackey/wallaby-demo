import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent32Component } from './simple-component32.component';

describe('SimpleComponent32Component', () => {
  let component: SimpleComponent32Component;
  let fixture: ComponentFixture<SimpleComponent32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
