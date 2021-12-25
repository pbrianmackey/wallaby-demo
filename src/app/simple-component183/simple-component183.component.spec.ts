import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent183Component } from './simple-component183.component';

describe('SimpleComponent183Component', () => {
  let component: SimpleComponent183Component;
  let fixture: ComponentFixture<SimpleComponent183Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent183Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
