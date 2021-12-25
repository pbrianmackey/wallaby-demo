import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent384Component } from './simple-component384.component';

describe('SimpleComponent384Component', () => {
  let component: SimpleComponent384Component;
  let fixture: ComponentFixture<SimpleComponent384Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent384Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
