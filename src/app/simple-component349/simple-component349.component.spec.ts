import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent349Component } from './simple-component349.component';

describe('SimpleComponent349Component', () => {
  let component: SimpleComponent349Component;
  let fixture: ComponentFixture<SimpleComponent349Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent349Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
