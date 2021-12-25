import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent138Component } from './simple-component138.component';

describe('SimpleComponent138Component', () => {
  let component: SimpleComponent138Component;
  let fixture: ComponentFixture<SimpleComponent138Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent138Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
