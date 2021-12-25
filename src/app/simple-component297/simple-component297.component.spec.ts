import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent297Component } from './simple-component297.component';

describe('SimpleComponent297Component', () => {
  let component: SimpleComponent297Component;
  let fixture: ComponentFixture<SimpleComponent297Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent297Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
