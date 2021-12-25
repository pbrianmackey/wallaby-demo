import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent122Component } from './simple-component122.component';

describe('SimpleComponent122Component', () => {
  let component: SimpleComponent122Component;
  let fixture: ComponentFixture<SimpleComponent122Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent122Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
