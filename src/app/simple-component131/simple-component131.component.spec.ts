import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent131Component } from './simple-component131.component';

describe('SimpleComponent131Component', () => {
  let component: SimpleComponent131Component;
  let fixture: ComponentFixture<SimpleComponent131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent131Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
