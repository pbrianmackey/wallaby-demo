import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent174Component } from './simple-component174.component';

describe('SimpleComponent174Component', () => {
  let component: SimpleComponent174Component;
  let fixture: ComponentFixture<SimpleComponent174Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent174Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
