import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent61Component } from './simple-component61.component';

describe('SimpleComponent61Component', () => {
  let component: SimpleComponent61Component;
  let fixture: ComponentFixture<SimpleComponent61Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent61Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
