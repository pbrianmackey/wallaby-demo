import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent3Component } from './simple-component3.component';

describe('SimpleComponent3Component', () => {
  let component: SimpleComponent3Component;
  let fixture: ComponentFixture<SimpleComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
