import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent166Component } from './simple-component166.component';

describe('SimpleComponent166Component', () => {
  let component: SimpleComponent166Component;
  let fixture: ComponentFixture<SimpleComponent166Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent166Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
