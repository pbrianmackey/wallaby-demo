import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent258Component } from './simple-component258.component';

describe('SimpleComponent258Component', () => {
  let component: SimpleComponent258Component;
  let fixture: ComponentFixture<SimpleComponent258Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent258Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
