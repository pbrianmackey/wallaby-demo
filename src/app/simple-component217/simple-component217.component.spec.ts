import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent217Component } from './simple-component217.component';

describe('SimpleComponent217Component', () => {
  let component: SimpleComponent217Component;
  let fixture: ComponentFixture<SimpleComponent217Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent217Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
