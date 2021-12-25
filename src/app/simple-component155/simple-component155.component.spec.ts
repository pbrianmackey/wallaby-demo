import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent155Component } from './simple-component155.component';

describe('SimpleComponent155Component', () => {
  let component: SimpleComponent155Component;
  let fixture: ComponentFixture<SimpleComponent155Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent155Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
