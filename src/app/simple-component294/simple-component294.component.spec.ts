import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent294Component } from './simple-component294.component';

describe('SimpleComponent294Component', () => {
  let component: SimpleComponent294Component;
  let fixture: ComponentFixture<SimpleComponent294Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent294Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
