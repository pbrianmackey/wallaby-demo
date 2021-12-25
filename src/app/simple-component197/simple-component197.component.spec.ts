import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent197Component } from './simple-component197.component';

describe('SimpleComponent197Component', () => {
  let component: SimpleComponent197Component;
  let fixture: ComponentFixture<SimpleComponent197Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent197Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
