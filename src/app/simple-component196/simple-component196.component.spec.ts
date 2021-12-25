import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent196Component } from './simple-component196.component';

describe('SimpleComponent196Component', () => {
  let component: SimpleComponent196Component;
  let fixture: ComponentFixture<SimpleComponent196Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent196Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
