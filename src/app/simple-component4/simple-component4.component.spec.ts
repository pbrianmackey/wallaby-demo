import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent4Component } from './simple-component4.component';

describe('SimpleComponent4Component', () => {
  let component: SimpleComponent4Component;
  let fixture: ComponentFixture<SimpleComponent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
