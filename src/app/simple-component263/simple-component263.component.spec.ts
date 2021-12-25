import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent263Component } from './simple-component263.component';

describe('SimpleComponent263Component', () => {
  let component: SimpleComponent263Component;
  let fixture: ComponentFixture<SimpleComponent263Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent263Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
