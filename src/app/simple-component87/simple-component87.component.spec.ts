import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent87Component } from './simple-component87.component';

describe('SimpleComponent87Component', () => {
  let component: SimpleComponent87Component;
  let fixture: ComponentFixture<SimpleComponent87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent87Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
