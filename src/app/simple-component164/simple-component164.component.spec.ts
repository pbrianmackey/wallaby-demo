import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent164Component } from './simple-component164.component';

describe('SimpleComponent164Component', () => {
  let component: SimpleComponent164Component;
  let fixture: ComponentFixture<SimpleComponent164Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent164Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
