import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent243Component } from './simple-component243.component';

describe('SimpleComponent243Component', () => {
  let component: SimpleComponent243Component;
  let fixture: ComponentFixture<SimpleComponent243Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent243Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
