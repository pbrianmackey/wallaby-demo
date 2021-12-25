import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent71Component } from './simple-component71.component';

describe('SimpleComponent71Component', () => {
  let component: SimpleComponent71Component;
  let fixture: ComponentFixture<SimpleComponent71Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent71Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
