import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent308Component } from './simple-component308.component';

describe('SimpleComponent308Component', () => {
  let component: SimpleComponent308Component;
  let fixture: ComponentFixture<SimpleComponent308Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent308Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
