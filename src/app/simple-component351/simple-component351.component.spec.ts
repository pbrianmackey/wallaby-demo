import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent351Component } from './simple-component351.component';

describe('SimpleComponent351Component', () => {
  let component: SimpleComponent351Component;
  let fixture: ComponentFixture<SimpleComponent351Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent351Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
