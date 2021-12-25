import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent323Component } from './simple-component323.component';

describe('SimpleComponent323Component', () => {
  let component: SimpleComponent323Component;
  let fixture: ComponentFixture<SimpleComponent323Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent323Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
