import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent148Component } from './simple-component148.component';

describe('SimpleComponent148Component', () => {
  let component: SimpleComponent148Component;
  let fixture: ComponentFixture<SimpleComponent148Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent148Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
