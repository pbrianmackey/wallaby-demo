import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent228Component } from './simple-component228.component';

describe('SimpleComponent228Component', () => {
  let component: SimpleComponent228Component;
  let fixture: ComponentFixture<SimpleComponent228Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent228Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
