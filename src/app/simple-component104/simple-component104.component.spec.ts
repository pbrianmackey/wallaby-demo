import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent104Component } from './simple-component104.component';

describe('SimpleComponent104Component', () => {
  let component: SimpleComponent104Component;
  let fixture: ComponentFixture<SimpleComponent104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent104Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
