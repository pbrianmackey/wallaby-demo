import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent146Component } from './simple-component146.component';

describe('SimpleComponent146Component', () => {
  let component: SimpleComponent146Component;
  let fixture: ComponentFixture<SimpleComponent146Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent146Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
