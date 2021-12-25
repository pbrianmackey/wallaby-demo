import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent274Component } from './simple-component274.component';

describe('SimpleComponent274Component', () => {
  let component: SimpleComponent274Component;
  let fixture: ComponentFixture<SimpleComponent274Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent274Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
