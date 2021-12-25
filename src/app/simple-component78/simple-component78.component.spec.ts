import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent78Component } from './simple-component78.component';

describe('SimpleComponent78Component', () => {
  let component: SimpleComponent78Component;
  let fixture: ComponentFixture<SimpleComponent78Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent78Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
