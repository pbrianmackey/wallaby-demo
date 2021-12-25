import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent298Component } from './simple-component298.component';

describe('SimpleComponent298Component', () => {
  let component: SimpleComponent298Component;
  let fixture: ComponentFixture<SimpleComponent298Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent298Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
