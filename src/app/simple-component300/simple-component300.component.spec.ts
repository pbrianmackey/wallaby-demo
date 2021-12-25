import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent300Component } from './simple-component300.component';

describe('SimpleComponent300Component', () => {
  let component: SimpleComponent300Component;
  let fixture: ComponentFixture<SimpleComponent300Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent300Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
