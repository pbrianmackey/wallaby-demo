import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent128Component } from './simple-component128.component';

describe('SimpleComponent128Component', () => {
  let component: SimpleComponent128Component;
  let fixture: ComponentFixture<SimpleComponent128Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent128Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
