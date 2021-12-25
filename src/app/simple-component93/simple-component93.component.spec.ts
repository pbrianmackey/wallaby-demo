import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent93Component } from './simple-component93.component';

describe('SimpleComponent93Component', () => {
  let component: SimpleComponent93Component;
  let fixture: ComponentFixture<SimpleComponent93Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent93Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
