import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent158Component } from './simple-component158.component';

describe('SimpleComponent158Component', () => {
  let component: SimpleComponent158Component;
  let fixture: ComponentFixture<SimpleComponent158Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent158Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
