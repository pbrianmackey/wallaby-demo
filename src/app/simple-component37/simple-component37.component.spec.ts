import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent37Component } from './simple-component37.component';

describe('SimpleComponent37Component', () => {
  let component: SimpleComponent37Component;
  let fixture: ComponentFixture<SimpleComponent37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent37Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
