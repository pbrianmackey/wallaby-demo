import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent226Component } from './simple-component226.component';

describe('SimpleComponent226Component', () => {
  let component: SimpleComponent226Component;
  let fixture: ComponentFixture<SimpleComponent226Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent226Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
