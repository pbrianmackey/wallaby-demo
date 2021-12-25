import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent213Component } from './simple-component213.component';

describe('SimpleComponent213Component', () => {
  let component: SimpleComponent213Component;
  let fixture: ComponentFixture<SimpleComponent213Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent213Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
