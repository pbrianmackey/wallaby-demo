import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent70Component } from './simple-component70.component';

describe('SimpleComponent70Component', () => {
  let component: SimpleComponent70Component;
  let fixture: ComponentFixture<SimpleComponent70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent70Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
