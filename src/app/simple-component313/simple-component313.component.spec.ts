import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent313Component } from './simple-component313.component';

describe('SimpleComponent313Component', () => {
  let component: SimpleComponent313Component;
  let fixture: ComponentFixture<SimpleComponent313Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent313Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
