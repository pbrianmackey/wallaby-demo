import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent332Component } from './simple-component332.component';

describe('SimpleComponent332Component', () => {
  let component: SimpleComponent332Component;
  let fixture: ComponentFixture<SimpleComponent332Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent332Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
