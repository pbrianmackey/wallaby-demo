import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent338Component } from './simple-component338.component';

describe('SimpleComponent338Component', () => {
  let component: SimpleComponent338Component;
  let fixture: ComponentFixture<SimpleComponent338Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent338Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
