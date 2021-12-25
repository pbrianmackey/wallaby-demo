import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent73Component } from './simple-component73.component';

describe('SimpleComponent73Component', () => {
  let component: SimpleComponent73Component;
  let fixture: ComponentFixture<SimpleComponent73Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent73Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
