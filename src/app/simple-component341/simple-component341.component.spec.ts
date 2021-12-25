import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent341Component } from './simple-component341.component';

describe('SimpleComponent341Component', () => {
  let component: SimpleComponent341Component;
  let fixture: ComponentFixture<SimpleComponent341Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent341Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
