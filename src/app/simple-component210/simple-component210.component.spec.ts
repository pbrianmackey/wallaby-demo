import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent210Component } from './simple-component210.component';

describe('SimpleComponent210Component', () => {
  let component: SimpleComponent210Component;
  let fixture: ComponentFixture<SimpleComponent210Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent210Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
