import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent287Component } from './simple-component287.component';

describe('SimpleComponent287Component', () => {
  let component: SimpleComponent287Component;
  let fixture: ComponentFixture<SimpleComponent287Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent287Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
