import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent211Component } from './simple-component211.component';

describe('SimpleComponent211Component', () => {
  let component: SimpleComponent211Component;
  let fixture: ComponentFixture<SimpleComponent211Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent211Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
