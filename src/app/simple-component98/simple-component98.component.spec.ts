import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent98Component } from './simple-component98.component';

describe('SimpleComponent98Component', () => {
  let component: SimpleComponent98Component;
  let fixture: ComponentFixture<SimpleComponent98Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent98Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
