import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent109Component } from './simple-component109.component';

describe('SimpleComponent109Component', () => {
  let component: SimpleComponent109Component;
  let fixture: ComponentFixture<SimpleComponent109Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent109Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
