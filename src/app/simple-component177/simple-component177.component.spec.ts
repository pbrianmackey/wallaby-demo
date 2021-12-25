import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent177Component } from './simple-component177.component';

describe('SimpleComponent177Component', () => {
  let component: SimpleComponent177Component;
  let fixture: ComponentFixture<SimpleComponent177Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent177Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
