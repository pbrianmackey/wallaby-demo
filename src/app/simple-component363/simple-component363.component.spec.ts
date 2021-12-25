import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent363Component } from './simple-component363.component';

describe('SimpleComponent363Component', () => {
  let component: SimpleComponent363Component;
  let fixture: ComponentFixture<SimpleComponent363Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent363Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
