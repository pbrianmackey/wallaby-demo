import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent107Component } from './simple-component107.component';

describe('SimpleComponent107Component', () => {
  let component: SimpleComponent107Component;
  let fixture: ComponentFixture<SimpleComponent107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent107Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
