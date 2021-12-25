import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent145Component } from './simple-component145.component';

describe('SimpleComponent145Component', () => {
  let component: SimpleComponent145Component;
  let fixture: ComponentFixture<SimpleComponent145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent145Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
