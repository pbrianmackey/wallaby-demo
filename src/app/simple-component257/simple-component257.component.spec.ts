import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent257Component } from './simple-component257.component';

describe('SimpleComponent257Component', () => {
  let component: SimpleComponent257Component;
  let fixture: ComponentFixture<SimpleComponent257Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent257Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
