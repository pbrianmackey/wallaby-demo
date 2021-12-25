import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent13Component } from './simple-component13.component';

describe('SimpleComponent13Component', () => {
  let component: SimpleComponent13Component;
  let fixture: ComponentFixture<SimpleComponent13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
