import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent245Component } from './simple-component245.component';

describe('SimpleComponent245Component', () => {
  let component: SimpleComponent245Component;
  let fixture: ComponentFixture<SimpleComponent245Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent245Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
