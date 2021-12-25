import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent31Component } from './simple-component31.component';

describe('SimpleComponent31Component', () => {
  let component: SimpleComponent31Component;
  let fixture: ComponentFixture<SimpleComponent31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
