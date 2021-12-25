import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent52Component } from './simple-component52.component';

describe('SimpleComponent52Component', () => {
  let component: SimpleComponent52Component;
  let fixture: ComponentFixture<SimpleComponent52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent52Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
