import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent327Component } from './simple-component327.component';

describe('SimpleComponent327Component', () => {
  let component: SimpleComponent327Component;
  let fixture: ComponentFixture<SimpleComponent327Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent327Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
