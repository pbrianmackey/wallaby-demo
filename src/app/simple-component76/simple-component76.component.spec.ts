import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent76Component } from './simple-component76.component';

describe('SimpleComponent76Component', () => {
  let component: SimpleComponent76Component;
  let fixture: ComponentFixture<SimpleComponent76Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent76Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
