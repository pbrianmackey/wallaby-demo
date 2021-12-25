import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent247Component } from './simple-component247.component';

describe('SimpleComponent247Component', () => {
  let component: SimpleComponent247Component;
  let fixture: ComponentFixture<SimpleComponent247Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent247Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
