import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent366Component } from './simple-component366.component';

describe('SimpleComponent366Component', () => {
  let component: SimpleComponent366Component;
  let fixture: ComponentFixture<SimpleComponent366Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent366Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
