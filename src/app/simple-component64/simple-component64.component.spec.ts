import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent64Component } from './simple-component64.component';

describe('SimpleComponent64Component', () => {
  let component: SimpleComponent64Component;
  let fixture: ComponentFixture<SimpleComponent64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
