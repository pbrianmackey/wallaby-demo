import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent178Component } from './simple-component178.component';

describe('SimpleComponent178Component', () => {
  let component: SimpleComponent178Component;
  let fixture: ComponentFixture<SimpleComponent178Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent178Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
