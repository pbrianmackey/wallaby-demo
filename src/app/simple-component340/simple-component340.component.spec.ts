import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent340Component } from './simple-component340.component';

describe('SimpleComponent340Component', () => {
  let component: SimpleComponent340Component;
  let fixture: ComponentFixture<SimpleComponent340Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent340Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
