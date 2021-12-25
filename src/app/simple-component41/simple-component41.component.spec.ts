import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent41Component } from './simple-component41.component';

describe('SimpleComponent41Component', () => {
  let component: SimpleComponent41Component;
  let fixture: ComponentFixture<SimpleComponent41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent41Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
