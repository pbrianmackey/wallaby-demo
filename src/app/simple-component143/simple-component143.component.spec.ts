import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent143Component } from './simple-component143.component';

describe('SimpleComponent143Component', () => {
  let component: SimpleComponent143Component;
  let fixture: ComponentFixture<SimpleComponent143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent143Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
