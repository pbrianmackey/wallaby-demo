import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent165Component } from './simple-component165.component';

describe('SimpleComponent165Component', () => {
  let component: SimpleComponent165Component;
  let fixture: ComponentFixture<SimpleComponent165Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent165Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
