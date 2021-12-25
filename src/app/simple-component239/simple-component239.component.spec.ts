import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent239Component } from './simple-component239.component';

describe('SimpleComponent239Component', () => {
  let component: SimpleComponent239Component;
  let fixture: ComponentFixture<SimpleComponent239Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent239Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
