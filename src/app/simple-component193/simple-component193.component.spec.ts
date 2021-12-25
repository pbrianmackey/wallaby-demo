import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent193Component } from './simple-component193.component';

describe('SimpleComponent193Component', () => {
  let component: SimpleComponent193Component;
  let fixture: ComponentFixture<SimpleComponent193Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent193Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
