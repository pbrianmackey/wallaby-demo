import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent101Component } from './simple-component101.component';

describe('SimpleComponent101Component', () => {
  let component: SimpleComponent101Component;
  let fixture: ComponentFixture<SimpleComponent101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
