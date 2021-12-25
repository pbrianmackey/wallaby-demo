import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent6Component } from './simple-component6.component';

describe('SimpleComponent6Component', () => {
  let component: SimpleComponent6Component;
  let fixture: ComponentFixture<SimpleComponent6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
