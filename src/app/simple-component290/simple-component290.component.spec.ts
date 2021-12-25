import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent290Component } from './simple-component290.component';

describe('SimpleComponent290Component', () => {
  let component: SimpleComponent290Component;
  let fixture: ComponentFixture<SimpleComponent290Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent290Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
