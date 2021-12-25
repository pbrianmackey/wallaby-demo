import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent288Component } from './simple-component288.component';

describe('SimpleComponent288Component', () => {
  let component: SimpleComponent288Component;
  let fixture: ComponentFixture<SimpleComponent288Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent288Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
