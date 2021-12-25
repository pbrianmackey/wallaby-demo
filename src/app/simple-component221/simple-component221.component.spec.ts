import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent221Component } from './simple-component221.component';

describe('SimpleComponent221Component', () => {
  let component: SimpleComponent221Component;
  let fixture: ComponentFixture<SimpleComponent221Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent221Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
