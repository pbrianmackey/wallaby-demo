import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent389Component } from './simple-component389.component';

describe('SimpleComponent389Component', () => {
  let component: SimpleComponent389Component;
  let fixture: ComponentFixture<SimpleComponent389Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent389Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
