import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent44Component } from './simple-component44.component';

describe('SimpleComponent44Component', () => {
  let component: SimpleComponent44Component;
  let fixture: ComponentFixture<SimpleComponent44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent44Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
