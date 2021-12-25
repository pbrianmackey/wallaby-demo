import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent342Component } from './simple-component342.component';

describe('SimpleComponent342Component', () => {
  let component: SimpleComponent342Component;
  let fixture: ComponentFixture<SimpleComponent342Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent342Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
