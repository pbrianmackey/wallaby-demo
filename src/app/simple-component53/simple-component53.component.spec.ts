import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent53Component } from './simple-component53.component';

describe('SimpleComponent53Component', () => {
  let component: SimpleComponent53Component;
  let fixture: ComponentFixture<SimpleComponent53Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent53Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
