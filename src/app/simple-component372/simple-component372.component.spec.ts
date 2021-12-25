import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent372Component } from './simple-component372.component';

describe('SimpleComponent372Component', () => {
  let component: SimpleComponent372Component;
  let fixture: ComponentFixture<SimpleComponent372Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent372Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
