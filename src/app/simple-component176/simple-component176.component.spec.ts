import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent176Component } from './simple-component176.component';

describe('SimpleComponent176Component', () => {
  let component: SimpleComponent176Component;
  let fixture: ComponentFixture<SimpleComponent176Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent176Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
