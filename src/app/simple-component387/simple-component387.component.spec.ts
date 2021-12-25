import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent387Component } from './simple-component387.component';

describe('SimpleComponent387Component', () => {
  let component: SimpleComponent387Component;
  let fixture: ComponentFixture<SimpleComponent387Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent387Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
