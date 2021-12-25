import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent152Component } from './simple-component152.component';

describe('SimpleComponent152Component', () => {
  let component: SimpleComponent152Component;
  let fixture: ComponentFixture<SimpleComponent152Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent152Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
