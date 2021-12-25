import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent113Component } from './simple-component113.component';

describe('SimpleComponent113Component', () => {
  let component: SimpleComponent113Component;
  let fixture: ComponentFixture<SimpleComponent113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent113Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
