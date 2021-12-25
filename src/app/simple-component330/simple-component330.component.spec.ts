import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent330Component } from './simple-component330.component';

describe('SimpleComponent330Component', () => {
  let component: SimpleComponent330Component;
  let fixture: ComponentFixture<SimpleComponent330Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent330Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
