import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent398Component } from './simple-component398.component';

describe('SimpleComponent398Component', () => {
  let component: SimpleComponent398Component;
  let fixture: ComponentFixture<SimpleComponent398Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent398Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
