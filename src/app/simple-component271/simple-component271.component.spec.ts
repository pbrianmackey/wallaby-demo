import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent271Component } from './simple-component271.component';

describe('SimpleComponent271Component', () => {
  let component: SimpleComponent271Component;
  let fixture: ComponentFixture<SimpleComponent271Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent271Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
