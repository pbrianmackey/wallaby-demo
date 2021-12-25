import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent99Component } from './simple-component99.component';

describe('SimpleComponent99Component', () => {
  let component: SimpleComponent99Component;
  let fixture: ComponentFixture<SimpleComponent99Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent99Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
