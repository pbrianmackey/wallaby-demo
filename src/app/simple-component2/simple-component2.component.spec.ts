import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent2Component } from './simple-component2.component';

describe('SimpleComponent2Component', () => {
  let component: SimpleComponent2Component;
  let fixture: ComponentFixture<SimpleComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
