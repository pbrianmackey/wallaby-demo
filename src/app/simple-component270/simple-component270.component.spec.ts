import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent270Component } from './simple-component270.component';

describe('SimpleComponent270Component', () => {
  let component: SimpleComponent270Component;
  let fixture: ComponentFixture<SimpleComponent270Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent270Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
