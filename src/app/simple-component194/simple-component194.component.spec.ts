import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent194Component } from './simple-component194.component';

describe('SimpleComponent194Component', () => {
  let component: SimpleComponent194Component;
  let fixture: ComponentFixture<SimpleComponent194Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent194Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
