import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent283Component } from './simple-component283.component';

describe('SimpleComponent283Component', () => {
  let component: SimpleComponent283Component;
  let fixture: ComponentFixture<SimpleComponent283Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent283Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
