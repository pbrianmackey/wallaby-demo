import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent314Component } from './simple-component314.component';

describe('SimpleComponent314Component', () => {
  let component: SimpleComponent314Component;
  let fixture: ComponentFixture<SimpleComponent314Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent314Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
