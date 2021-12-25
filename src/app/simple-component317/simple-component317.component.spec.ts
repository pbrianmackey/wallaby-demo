import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent317Component } from './simple-component317.component';

describe('SimpleComponent317Component', () => {
  let component: SimpleComponent317Component;
  let fixture: ComponentFixture<SimpleComponent317Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent317Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
