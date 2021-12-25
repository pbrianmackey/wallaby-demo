import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent355Component } from './simple-component355.component';

describe('SimpleComponent355Component', () => {
  let component: SimpleComponent355Component;
  let fixture: ComponentFixture<SimpleComponent355Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent355Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
