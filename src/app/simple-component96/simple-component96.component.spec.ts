import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent96Component } from './simple-component96.component';

describe('SimpleComponent96Component', () => {
  let component: SimpleComponent96Component;
  let fixture: ComponentFixture<SimpleComponent96Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent96Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
