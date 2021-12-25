import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent115Component } from './simple-component115.component';

describe('SimpleComponent115Component', () => {
  let component: SimpleComponent115Component;
  let fixture: ComponentFixture<SimpleComponent115Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent115Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
