import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent265Component } from './simple-component265.component';

describe('SimpleComponent265Component', () => {
  let component: SimpleComponent265Component;
  let fixture: ComponentFixture<SimpleComponent265Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent265Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
