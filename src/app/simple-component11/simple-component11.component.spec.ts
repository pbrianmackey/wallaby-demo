import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent11Component } from './simple-component11.component';

describe('SimpleComponent11Component', () => {
  let component: SimpleComponent11Component;
  let fixture: ComponentFixture<SimpleComponent11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
