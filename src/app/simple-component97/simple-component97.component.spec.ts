import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent97Component } from './simple-component97.component';

describe('SimpleComponent97Component', () => {
  let component: SimpleComponent97Component;
  let fixture: ComponentFixture<SimpleComponent97Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent97Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
