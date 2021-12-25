import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent46Component } from './simple-component46.component';

describe('SimpleComponent46Component', () => {
  let component: SimpleComponent46Component;
  let fixture: ComponentFixture<SimpleComponent46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent46Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
