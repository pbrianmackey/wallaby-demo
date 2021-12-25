import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent55Component } from './simple-component55.component';

describe('SimpleComponent55Component', () => {
  let component: SimpleComponent55Component;
  let fixture: ComponentFixture<SimpleComponent55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent55Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
