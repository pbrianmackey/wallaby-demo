import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent16Component } from './simple-component16.component';

describe('SimpleComponent16Component', () => {
  let component: SimpleComponent16Component;
  let fixture: ComponentFixture<SimpleComponent16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
