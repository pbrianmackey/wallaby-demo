import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent339Component } from './simple-component339.component';

describe('SimpleComponent339Component', () => {
  let component: SimpleComponent339Component;
  let fixture: ComponentFixture<SimpleComponent339Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent339Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
