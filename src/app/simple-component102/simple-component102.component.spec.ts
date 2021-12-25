import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent102Component } from './simple-component102.component';

describe('SimpleComponent102Component', () => {
  let component: SimpleComponent102Component;
  let fixture: ComponentFixture<SimpleComponent102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent102Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
