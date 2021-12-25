import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent192Component } from './simple-component192.component';

describe('SimpleComponent192Component', () => {
  let component: SimpleComponent192Component;
  let fixture: ComponentFixture<SimpleComponent192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent192Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
