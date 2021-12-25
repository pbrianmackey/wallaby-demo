import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent390Component } from './simple-component390.component';

describe('SimpleComponent390Component', () => {
  let component: SimpleComponent390Component;
  let fixture: ComponentFixture<SimpleComponent390Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent390Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
