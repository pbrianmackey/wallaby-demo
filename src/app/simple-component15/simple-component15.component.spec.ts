import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent15Component } from './simple-component15.component';

describe('SimpleComponent15Component', () => {
  let component: SimpleComponent15Component;
  let fixture: ComponentFixture<SimpleComponent15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
