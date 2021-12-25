import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent29Component } from './simple-component29.component';

describe('SimpleComponent29Component', () => {
  let component: SimpleComponent29Component;
  let fixture: ComponentFixture<SimpleComponent29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent29Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
