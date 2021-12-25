import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent133Component } from './simple-component133.component';

describe('SimpleComponent133Component', () => {
  let component: SimpleComponent133Component;
  let fixture: ComponentFixture<SimpleComponent133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent133Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
