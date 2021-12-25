import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent212Component } from './simple-component212.component';

describe('SimpleComponent212Component', () => {
  let component: SimpleComponent212Component;
  let fixture: ComponentFixture<SimpleComponent212Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent212Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
