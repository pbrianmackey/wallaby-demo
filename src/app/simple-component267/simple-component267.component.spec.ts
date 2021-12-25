import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent267Component } from './simple-component267.component';

describe('SimpleComponent267Component', () => {
  let component: SimpleComponent267Component;
  let fixture: ComponentFixture<SimpleComponent267Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent267Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
