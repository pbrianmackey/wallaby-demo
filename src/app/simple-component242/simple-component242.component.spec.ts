import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent242Component } from './simple-component242.component';

describe('SimpleComponent242Component', () => {
  let component: SimpleComponent242Component;
  let fixture: ComponentFixture<SimpleComponent242Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent242Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
