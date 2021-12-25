import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent399Component } from './simple-component399.component';

describe('SimpleComponent399Component', () => {
  let component: SimpleComponent399Component;
  let fixture: ComponentFixture<SimpleComponent399Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent399Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
