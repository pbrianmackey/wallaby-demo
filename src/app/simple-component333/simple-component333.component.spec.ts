import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent333Component } from './simple-component333.component';

describe('SimpleComponent333Component', () => {
  let component: SimpleComponent333Component;
  let fixture: ComponentFixture<SimpleComponent333Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent333Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
