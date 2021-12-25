import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent312Component } from './simple-component312.component';

describe('SimpleComponent312Component', () => {
  let component: SimpleComponent312Component;
  let fixture: ComponentFixture<SimpleComponent312Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent312Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
