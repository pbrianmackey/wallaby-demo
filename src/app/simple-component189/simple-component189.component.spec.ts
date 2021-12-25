import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent189Component } from './simple-component189.component';

describe('SimpleComponent189Component', () => {
  let component: SimpleComponent189Component;
  let fixture: ComponentFixture<SimpleComponent189Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent189Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
