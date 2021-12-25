import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent95Component } from './simple-component95.component';

describe('SimpleComponent95Component', () => {
  let component: SimpleComponent95Component;
  let fixture: ComponentFixture<SimpleComponent95Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent95Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
