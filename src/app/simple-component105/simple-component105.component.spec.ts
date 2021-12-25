import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent105Component } from './simple-component105.component';

describe('SimpleComponent105Component', () => {
  let component: SimpleComponent105Component;
  let fixture: ComponentFixture<SimpleComponent105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent105Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
