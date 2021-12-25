import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent374Component } from './simple-component374.component';

describe('SimpleComponent374Component', () => {
  let component: SimpleComponent374Component;
  let fixture: ComponentFixture<SimpleComponent374Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent374Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
