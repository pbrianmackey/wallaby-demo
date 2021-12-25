import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent154Component } from './simple-component154.component';

describe('SimpleComponent154Component', () => {
  let component: SimpleComponent154Component;
  let fixture: ComponentFixture<SimpleComponent154Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent154Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
