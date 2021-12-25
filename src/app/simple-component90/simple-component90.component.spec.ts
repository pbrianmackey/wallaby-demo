import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent90Component } from './simple-component90.component';

describe('SimpleComponent90Component', () => {
  let component: SimpleComponent90Component;
  let fixture: ComponentFixture<SimpleComponent90Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent90Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
