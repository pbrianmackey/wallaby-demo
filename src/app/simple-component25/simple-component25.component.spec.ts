import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent25Component } from './simple-component25.component';

describe('SimpleComponent25Component', () => {
  let component: SimpleComponent25Component;
  let fixture: ComponentFixture<SimpleComponent25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
