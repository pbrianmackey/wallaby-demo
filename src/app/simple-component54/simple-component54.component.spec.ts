import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent54Component } from './simple-component54.component';

describe('SimpleComponent54Component', () => {
  let component: SimpleComponent54Component;
  let fixture: ComponentFixture<SimpleComponent54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent54Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
