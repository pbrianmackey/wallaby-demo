import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent329Component } from './simple-component329.component';

describe('SimpleComponent329Component', () => {
  let component: SimpleComponent329Component;
  let fixture: ComponentFixture<SimpleComponent329Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent329Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
