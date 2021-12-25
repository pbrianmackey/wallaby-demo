import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent303Component } from './simple-component303.component';

describe('SimpleComponent303Component', () => {
  let component: SimpleComponent303Component;
  let fixture: ComponentFixture<SimpleComponent303Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent303Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
