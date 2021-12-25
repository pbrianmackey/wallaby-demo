import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent325Component } from './simple-component325.component';

describe('SimpleComponent325Component', () => {
  let component: SimpleComponent325Component;
  let fixture: ComponentFixture<SimpleComponent325Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent325Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
