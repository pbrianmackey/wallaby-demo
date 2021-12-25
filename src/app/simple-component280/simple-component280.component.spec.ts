import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent280Component } from './simple-component280.component';

describe('SimpleComponent280Component', () => {
  let component: SimpleComponent280Component;
  let fixture: ComponentFixture<SimpleComponent280Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent280Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
