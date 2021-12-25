import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent376Component } from './simple-component376.component';

describe('SimpleComponent376Component', () => {
  let component: SimpleComponent376Component;
  let fixture: ComponentFixture<SimpleComponent376Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent376Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
