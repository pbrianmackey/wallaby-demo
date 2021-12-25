import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent354Component } from './simple-component354.component';

describe('SimpleComponent354Component', () => {
  let component: SimpleComponent354Component;
  let fixture: ComponentFixture<SimpleComponent354Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent354Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
