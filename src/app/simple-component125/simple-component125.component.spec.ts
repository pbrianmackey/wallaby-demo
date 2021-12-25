import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent125Component } from './simple-component125.component';

describe('SimpleComponent125Component', () => {
  let component: SimpleComponent125Component;
  let fixture: ComponentFixture<SimpleComponent125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent125Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
