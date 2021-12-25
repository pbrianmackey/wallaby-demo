import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent170Component } from './simple-component170.component';

describe('SimpleComponent170Component', () => {
  let component: SimpleComponent170Component;
  let fixture: ComponentFixture<SimpleComponent170Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent170Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
