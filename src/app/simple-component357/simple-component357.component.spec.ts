import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent357Component } from './simple-component357.component';

describe('SimpleComponent357Component', () => {
  let component: SimpleComponent357Component;
  let fixture: ComponentFixture<SimpleComponent357Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent357Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
