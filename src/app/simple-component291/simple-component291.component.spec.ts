import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent291Component } from './simple-component291.component';

describe('SimpleComponent291Component', () => {
  let component: SimpleComponent291Component;
  let fixture: ComponentFixture<SimpleComponent291Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent291Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
