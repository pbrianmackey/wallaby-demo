import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent328Component } from './simple-component328.component';

describe('SimpleComponent328Component', () => {
  let component: SimpleComponent328Component;
  let fixture: ComponentFixture<SimpleComponent328Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent328Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
