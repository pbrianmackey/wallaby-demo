import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent403Component } from './simple-component403.component';

describe('SimpleComponent403Component', () => {
  let component: SimpleComponent403Component;
  let fixture: ComponentFixture<SimpleComponent403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent403Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
