import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent311Component } from './simple-component311.component';

describe('SimpleComponent311Component', () => {
  let component: SimpleComponent311Component;
  let fixture: ComponentFixture<SimpleComponent311Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent311Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
