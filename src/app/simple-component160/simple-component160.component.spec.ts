import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent160Component } from './simple-component160.component';

describe('SimpleComponent160Component', () => {
  let component: SimpleComponent160Component;
  let fixture: ComponentFixture<SimpleComponent160Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent160Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
