import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent181Component } from './simple-component181.component';

describe('SimpleComponent181Component', () => {
  let component: SimpleComponent181Component;
  let fixture: ComponentFixture<SimpleComponent181Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent181Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
