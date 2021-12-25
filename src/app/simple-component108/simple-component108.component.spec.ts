import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent108Component } from './simple-component108.component';

describe('SimpleComponent108Component', () => {
  let component: SimpleComponent108Component;
  let fixture: ComponentFixture<SimpleComponent108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent108Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
