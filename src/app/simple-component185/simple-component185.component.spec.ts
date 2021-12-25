import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent185Component } from './simple-component185.component';

describe('SimpleComponent185Component', () => {
  let component: SimpleComponent185Component;
  let fixture: ComponentFixture<SimpleComponent185Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent185Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
