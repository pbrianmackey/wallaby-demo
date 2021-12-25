import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent190Component } from './simple-component190.component';

describe('SimpleComponent190Component', () => {
  let component: SimpleComponent190Component;
  let fixture: ComponentFixture<SimpleComponent190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent190Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
