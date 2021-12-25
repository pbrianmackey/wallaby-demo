import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent111Component } from './simple-component111.component';

describe('SimpleComponent111Component', () => {
  let component: SimpleComponent111Component;
  let fixture: ComponentFixture<SimpleComponent111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
