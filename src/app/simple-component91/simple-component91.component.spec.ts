import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent91Component } from './simple-component91.component';

describe('SimpleComponent91Component', () => {
  let component: SimpleComponent91Component;
  let fixture: ComponentFixture<SimpleComponent91Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent91Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
