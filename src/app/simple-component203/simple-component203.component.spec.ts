import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent203Component } from './simple-component203.component';

describe('SimpleComponent203Component', () => {
  let component: SimpleComponent203Component;
  let fixture: ComponentFixture<SimpleComponent203Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent203Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
