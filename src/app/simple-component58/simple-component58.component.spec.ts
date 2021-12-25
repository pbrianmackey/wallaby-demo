import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent58Component } from './simple-component58.component';

describe('SimpleComponent58Component', () => {
  let component: SimpleComponent58Component;
  let fixture: ComponentFixture<SimpleComponent58Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent58Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
