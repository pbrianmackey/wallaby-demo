import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent326Component } from './simple-component326.component';

describe('SimpleComponent326Component', () => {
  let component: SimpleComponent326Component;
  let fixture: ComponentFixture<SimpleComponent326Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent326Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
