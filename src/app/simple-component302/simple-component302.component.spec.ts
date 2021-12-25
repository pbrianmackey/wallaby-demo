import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent302Component } from './simple-component302.component';

describe('SimpleComponent302Component', () => {
  let component: SimpleComponent302Component;
  let fixture: ComponentFixture<SimpleComponent302Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent302Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
