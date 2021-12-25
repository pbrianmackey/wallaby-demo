import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent371Component } from './simple-component371.component';

describe('SimpleComponent371Component', () => {
  let component: SimpleComponent371Component;
  let fixture: ComponentFixture<SimpleComponent371Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent371Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
