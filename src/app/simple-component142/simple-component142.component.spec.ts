import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent142Component } from './simple-component142.component';

describe('SimpleComponent142Component', () => {
  let component: SimpleComponent142Component;
  let fixture: ComponentFixture<SimpleComponent142Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent142Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
