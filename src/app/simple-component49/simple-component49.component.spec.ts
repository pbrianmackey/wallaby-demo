import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent49Component } from './simple-component49.component';

describe('SimpleComponent49Component', () => {
  let component: SimpleComponent49Component;
  let fixture: ComponentFixture<SimpleComponent49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent49Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
