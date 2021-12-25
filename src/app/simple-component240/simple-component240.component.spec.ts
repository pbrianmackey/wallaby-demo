import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent240Component } from './simple-component240.component';

describe('SimpleComponent240Component', () => {
  let component: SimpleComponent240Component;
  let fixture: ComponentFixture<SimpleComponent240Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent240Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
