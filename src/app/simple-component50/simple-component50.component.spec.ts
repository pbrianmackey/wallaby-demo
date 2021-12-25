import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent50Component } from './simple-component50.component';

describe('SimpleComponent50Component', () => {
  let component: SimpleComponent50Component;
  let fixture: ComponentFixture<SimpleComponent50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent50Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
