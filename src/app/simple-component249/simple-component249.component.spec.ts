import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent249Component } from './simple-component249.component';

describe('SimpleComponent249Component', () => {
  let component: SimpleComponent249Component;
  let fixture: ComponentFixture<SimpleComponent249Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent249Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
