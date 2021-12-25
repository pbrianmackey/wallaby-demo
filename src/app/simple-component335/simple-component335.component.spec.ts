import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent335Component } from './simple-component335.component';

describe('SimpleComponent335Component', () => {
  let component: SimpleComponent335Component;
  let fixture: ComponentFixture<SimpleComponent335Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent335Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
