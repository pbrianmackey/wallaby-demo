import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent51Component } from './simple-component51.component';

describe('SimpleComponent51Component', () => {
  let component: SimpleComponent51Component;
  let fixture: ComponentFixture<SimpleComponent51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent51Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
