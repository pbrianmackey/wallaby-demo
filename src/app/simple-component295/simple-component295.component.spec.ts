import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent295Component } from './simple-component295.component';

describe('SimpleComponent295Component', () => {
  let component: SimpleComponent295Component;
  let fixture: ComponentFixture<SimpleComponent295Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent295Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
