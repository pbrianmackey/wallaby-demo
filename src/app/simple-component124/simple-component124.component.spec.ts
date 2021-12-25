import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent124Component } from './simple-component124.component';

describe('SimpleComponent124Component', () => {
  let component: SimpleComponent124Component;
  let fixture: ComponentFixture<SimpleComponent124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent124Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
