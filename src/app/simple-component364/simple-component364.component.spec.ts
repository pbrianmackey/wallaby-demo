import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent364Component } from './simple-component364.component';

describe('SimpleComponent364Component', () => {
  let component: SimpleComponent364Component;
  let fixture: ComponentFixture<SimpleComponent364Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent364Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
