import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent35Component } from './simple-component35.component';

describe('SimpleComponent35Component', () => {
  let component: SimpleComponent35Component;
  let fixture: ComponentFixture<SimpleComponent35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
