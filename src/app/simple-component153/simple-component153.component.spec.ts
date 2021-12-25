import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent153Component } from './simple-component153.component';

describe('SimpleComponent153Component', () => {
  let component: SimpleComponent153Component;
  let fixture: ComponentFixture<SimpleComponent153Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent153Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
