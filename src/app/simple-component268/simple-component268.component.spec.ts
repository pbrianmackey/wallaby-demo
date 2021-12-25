import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent268Component } from './simple-component268.component';

describe('SimpleComponent268Component', () => {
  let component: SimpleComponent268Component;
  let fixture: ComponentFixture<SimpleComponent268Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent268Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
