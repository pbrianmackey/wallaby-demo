import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent397Component } from './simple-component397.component';

describe('SimpleComponent397Component', () => {
  let component: SimpleComponent397Component;
  let fixture: ComponentFixture<SimpleComponent397Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent397Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
