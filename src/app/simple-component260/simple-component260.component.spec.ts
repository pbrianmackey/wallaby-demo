import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent260Component } from './simple-component260.component';

describe('SimpleComponent260Component', () => {
  let component: SimpleComponent260Component;
  let fixture: ComponentFixture<SimpleComponent260Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent260Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
