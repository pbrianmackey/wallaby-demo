import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent159Component } from './simple-component159.component';

describe('SimpleComponent159Component', () => {
  let component: SimpleComponent159Component;
  let fixture: ComponentFixture<SimpleComponent159Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent159Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
