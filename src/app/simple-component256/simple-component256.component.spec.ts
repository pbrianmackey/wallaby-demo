import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent256Component } from './simple-component256.component';

describe('SimpleComponent256Component', () => {
  let component: SimpleComponent256Component;
  let fixture: ComponentFixture<SimpleComponent256Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent256Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
