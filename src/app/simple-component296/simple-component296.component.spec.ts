import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent296Component } from './simple-component296.component';

describe('SimpleComponent296Component', () => {
  let component: SimpleComponent296Component;
  let fixture: ComponentFixture<SimpleComponent296Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent296Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
