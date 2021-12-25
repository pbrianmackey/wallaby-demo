import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent367Component } from './simple-component367.component';

describe('SimpleComponent367Component', () => {
  let component: SimpleComponent367Component;
  let fixture: ComponentFixture<SimpleComponent367Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent367Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
