import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent230Component } from './simple-component230.component';

describe('SimpleComponent230Component', () => {
  let component: SimpleComponent230Component;
  let fixture: ComponentFixture<SimpleComponent230Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent230Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
