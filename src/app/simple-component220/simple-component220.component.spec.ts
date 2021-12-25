import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent220Component } from './simple-component220.component';

describe('SimpleComponent220Component', () => {
  let component: SimpleComponent220Component;
  let fixture: ComponentFixture<SimpleComponent220Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent220Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
