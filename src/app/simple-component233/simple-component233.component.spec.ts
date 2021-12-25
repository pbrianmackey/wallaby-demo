import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent233Component } from './simple-component233.component';

describe('SimpleComponent233Component', () => {
  let component: SimpleComponent233Component;
  let fixture: ComponentFixture<SimpleComponent233Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent233Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
