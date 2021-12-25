import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent381Component } from './simple-component381.component';

describe('SimpleComponent381Component', () => {
  let component: SimpleComponent381Component;
  let fixture: ComponentFixture<SimpleComponent381Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent381Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
