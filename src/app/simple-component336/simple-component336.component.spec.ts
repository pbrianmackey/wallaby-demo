import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent336Component } from './simple-component336.component';

describe('SimpleComponent336Component', () => {
  let component: SimpleComponent336Component;
  let fixture: ComponentFixture<SimpleComponent336Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent336Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
