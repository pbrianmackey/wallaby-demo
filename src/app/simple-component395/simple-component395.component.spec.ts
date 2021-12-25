import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent395Component } from './simple-component395.component';

describe('SimpleComponent395Component', () => {
  let component: SimpleComponent395Component;
  let fixture: ComponentFixture<SimpleComponent395Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent395Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
