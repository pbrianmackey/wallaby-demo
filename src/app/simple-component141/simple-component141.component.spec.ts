import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent141Component } from './simple-component141.component';

describe('SimpleComponent141Component', () => {
  let component: SimpleComponent141Component;
  let fixture: ComponentFixture<SimpleComponent141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
