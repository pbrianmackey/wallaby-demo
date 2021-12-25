import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent385Component } from './simple-component385.component';

describe('SimpleComponent385Component', () => {
  let component: SimpleComponent385Component;
  let fixture: ComponentFixture<SimpleComponent385Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent385Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
