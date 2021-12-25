import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent68Component } from './simple-component68.component';

describe('SimpleComponent68Component', () => {
  let component: SimpleComponent68Component;
  let fixture: ComponentFixture<SimpleComponent68Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent68Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
