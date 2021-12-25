import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent358Component } from './simple-component358.component';

describe('SimpleComponent358Component', () => {
  let component: SimpleComponent358Component;
  let fixture: ComponentFixture<SimpleComponent358Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent358Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
