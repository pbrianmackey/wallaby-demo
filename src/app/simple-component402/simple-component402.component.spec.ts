import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent402Component } from './simple-component402.component';

describe('SimpleComponent402Component', () => {
  let component: SimpleComponent402Component;
  let fixture: ComponentFixture<SimpleComponent402Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent402Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
