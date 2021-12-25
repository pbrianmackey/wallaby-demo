import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent285Component } from './simple-component285.component';

describe('SimpleComponent285Component', () => {
  let component: SimpleComponent285Component;
  let fixture: ComponentFixture<SimpleComponent285Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent285Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
