import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent188Component } from './simple-component188.component';

describe('SimpleComponent188Component', () => {
  let component: SimpleComponent188Component;
  let fixture: ComponentFixture<SimpleComponent188Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent188Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
