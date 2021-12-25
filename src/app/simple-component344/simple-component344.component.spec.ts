import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent344Component } from './simple-component344.component';

describe('SimpleComponent344Component', () => {
  let component: SimpleComponent344Component;
  let fixture: ComponentFixture<SimpleComponent344Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent344Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
