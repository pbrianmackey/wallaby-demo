import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent350Component } from './simple-component350.component';

describe('SimpleComponent350Component', () => {
  let component: SimpleComponent350Component;
  let fixture: ComponentFixture<SimpleComponent350Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent350Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
