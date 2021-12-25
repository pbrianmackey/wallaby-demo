import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent324Component } from './simple-component324.component';

describe('SimpleComponent324Component', () => {
  let component: SimpleComponent324Component;
  let fixture: ComponentFixture<SimpleComponent324Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent324Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
