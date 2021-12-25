import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent286Component } from './simple-component286.component';

describe('SimpleComponent286Component', () => {
  let component: SimpleComponent286Component;
  let fixture: ComponentFixture<SimpleComponent286Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent286Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
