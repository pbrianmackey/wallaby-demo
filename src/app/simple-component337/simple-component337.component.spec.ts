import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent337Component } from './simple-component337.component';

describe('SimpleComponent337Component', () => {
  let component: SimpleComponent337Component;
  let fixture: ComponentFixture<SimpleComponent337Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent337Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
