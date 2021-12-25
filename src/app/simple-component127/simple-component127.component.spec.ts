import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent127Component } from './simple-component127.component';

describe('SimpleComponent127Component', () => {
  let component: SimpleComponent127Component;
  let fixture: ComponentFixture<SimpleComponent127Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent127Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
