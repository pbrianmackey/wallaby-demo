import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent167Component } from './simple-component167.component';

describe('SimpleComponent167Component', () => {
  let component: SimpleComponent167Component;
  let fixture: ComponentFixture<SimpleComponent167Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent167Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
