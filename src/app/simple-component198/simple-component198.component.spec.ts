import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent198Component } from './simple-component198.component';

describe('SimpleComponent198Component', () => {
  let component: SimpleComponent198Component;
  let fixture: ComponentFixture<SimpleComponent198Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent198Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
