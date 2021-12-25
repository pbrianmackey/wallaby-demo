import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent14Component } from './simple-component14.component';

describe('SimpleComponent14Component', () => {
  let component: SimpleComponent14Component;
  let fixture: ComponentFixture<SimpleComponent14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
