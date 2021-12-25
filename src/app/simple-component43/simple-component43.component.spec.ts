import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent43Component } from './simple-component43.component';

describe('SimpleComponent43Component', () => {
  let component: SimpleComponent43Component;
  let fixture: ComponentFixture<SimpleComponent43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent43Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
