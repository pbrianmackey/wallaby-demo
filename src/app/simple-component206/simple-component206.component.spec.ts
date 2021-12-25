import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent206Component } from './simple-component206.component';

describe('SimpleComponent206Component', () => {
  let component: SimpleComponent206Component;
  let fixture: ComponentFixture<SimpleComponent206Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent206Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
