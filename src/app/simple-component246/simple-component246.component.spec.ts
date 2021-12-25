import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent246Component } from './simple-component246.component';

describe('SimpleComponent246Component', () => {
  let component: SimpleComponent246Component;
  let fixture: ComponentFixture<SimpleComponent246Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent246Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
