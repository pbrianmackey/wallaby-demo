import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent373Component } from './simple-component373.component';

describe('SimpleComponent373Component', () => {
  let component: SimpleComponent373Component;
  let fixture: ComponentFixture<SimpleComponent373Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent373Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
