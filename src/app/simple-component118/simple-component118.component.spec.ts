import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent118Component } from './simple-component118.component';

describe('SimpleComponent118Component', () => {
  let component: SimpleComponent118Component;
  let fixture: ComponentFixture<SimpleComponent118Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent118Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
