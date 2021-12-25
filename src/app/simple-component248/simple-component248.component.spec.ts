import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent248Component } from './simple-component248.component';

describe('SimpleComponent248Component', () => {
  let component: SimpleComponent248Component;
  let fixture: ComponentFixture<SimpleComponent248Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent248Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
