import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent278Component } from './simple-component278.component';

describe('SimpleComponent278Component', () => {
  let component: SimpleComponent278Component;
  let fixture: ComponentFixture<SimpleComponent278Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent278Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
