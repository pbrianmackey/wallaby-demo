import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent85Component } from './simple-component85.component';

describe('SimpleComponent85Component', () => {
  let component: SimpleComponent85Component;
  let fixture: ComponentFixture<SimpleComponent85Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent85Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
