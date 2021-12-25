import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent216Component } from './simple-component216.component';

describe('SimpleComponent216Component', () => {
  let component: SimpleComponent216Component;
  let fixture: ComponentFixture<SimpleComponent216Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent216Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
