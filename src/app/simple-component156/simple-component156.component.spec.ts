import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent156Component } from './simple-component156.component';

describe('SimpleComponent156Component', () => {
  let component: SimpleComponent156Component;
  let fixture: ComponentFixture<SimpleComponent156Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent156Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
