import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent273Component } from './simple-component273.component';

describe('SimpleComponent273Component', () => {
  let component: SimpleComponent273Component;
  let fixture: ComponentFixture<SimpleComponent273Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent273Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
