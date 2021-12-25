import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent137Component } from './simple-component137.component';

describe('SimpleComponent137Component', () => {
  let component: SimpleComponent137Component;
  let fixture: ComponentFixture<SimpleComponent137Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent137Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
