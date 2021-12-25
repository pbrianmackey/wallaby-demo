import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent219Component } from './simple-component219.component';

describe('SimpleComponent219Component', () => {
  let component: SimpleComponent219Component;
  let fixture: ComponentFixture<SimpleComponent219Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent219Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
