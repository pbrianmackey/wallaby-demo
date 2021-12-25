import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent7Component } from './simple-component7.component';

describe('SimpleComponent7Component', () => {
  let component: SimpleComponent7Component;
  let fixture: ComponentFixture<SimpleComponent7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
