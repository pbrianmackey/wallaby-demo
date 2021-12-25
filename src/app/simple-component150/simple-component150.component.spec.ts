import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent150Component } from './simple-component150.component';

describe('SimpleComponent150Component', () => {
  let component: SimpleComponent150Component;
  let fixture: ComponentFixture<SimpleComponent150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent150Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
