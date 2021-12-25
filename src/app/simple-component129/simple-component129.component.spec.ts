import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent129Component } from './simple-component129.component';

describe('SimpleComponent129Component', () => {
  let component: SimpleComponent129Component;
  let fixture: ComponentFixture<SimpleComponent129Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent129Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
