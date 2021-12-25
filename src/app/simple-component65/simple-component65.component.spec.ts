import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent65Component } from './simple-component65.component';

describe('SimpleComponent65Component', () => {
  let component: SimpleComponent65Component;
  let fixture: ComponentFixture<SimpleComponent65Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent65Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
