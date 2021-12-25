import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent10Component } from './simple-component10.component';

describe('SimpleComponent10Component', () => {
  let component: SimpleComponent10Component;
  let fixture: ComponentFixture<SimpleComponent10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
