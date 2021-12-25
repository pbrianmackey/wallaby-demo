import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent225Component } from './simple-component225.component';

describe('SimpleComponent225Component', () => {
  let component: SimpleComponent225Component;
  let fixture: ComponentFixture<SimpleComponent225Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent225Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
