import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent353Component } from './simple-component353.component';

describe('SimpleComponent353Component', () => {
  let component: SimpleComponent353Component;
  let fixture: ComponentFixture<SimpleComponent353Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent353Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
