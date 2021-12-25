import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent161Component } from './simple-component161.component';

describe('SimpleComponent161Component', () => {
  let component: SimpleComponent161Component;
  let fixture: ComponentFixture<SimpleComponent161Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent161Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
