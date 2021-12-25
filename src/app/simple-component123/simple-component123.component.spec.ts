import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent123Component } from './simple-component123.component';

describe('SimpleComponent123Component', () => {
  let component: SimpleComponent123Component;
  let fixture: ComponentFixture<SimpleComponent123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
