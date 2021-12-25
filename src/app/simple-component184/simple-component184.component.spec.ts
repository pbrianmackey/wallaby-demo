import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent184Component } from './simple-component184.component';

describe('SimpleComponent184Component', () => {
  let component: SimpleComponent184Component;
  let fixture: ComponentFixture<SimpleComponent184Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent184Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
