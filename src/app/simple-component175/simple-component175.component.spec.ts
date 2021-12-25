import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent175Component } from './simple-component175.component';

describe('SimpleComponent175Component', () => {
  let component: SimpleComponent175Component;
  let fixture: ComponentFixture<SimpleComponent175Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent175Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
