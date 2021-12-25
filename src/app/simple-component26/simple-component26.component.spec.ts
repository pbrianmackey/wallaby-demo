import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent26Component } from './simple-component26.component';

describe('SimpleComponent26Component', () => {
  let component: SimpleComponent26Component;
  let fixture: ComponentFixture<SimpleComponent26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent26Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
