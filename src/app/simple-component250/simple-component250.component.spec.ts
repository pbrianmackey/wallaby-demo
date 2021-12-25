import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent250Component } from './simple-component250.component';

describe('SimpleComponent250Component', () => {
  let component: SimpleComponent250Component;
  let fixture: ComponentFixture<SimpleComponent250Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent250Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
