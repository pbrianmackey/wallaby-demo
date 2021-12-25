import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent315Component } from './simple-component315.component';

describe('SimpleComponent315Component', () => {
  let component: SimpleComponent315Component;
  let fixture: ComponentFixture<SimpleComponent315Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent315Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
