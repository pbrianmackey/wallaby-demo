import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent352Component } from './simple-component352.component';

describe('SimpleComponent352Component', () => {
  let component: SimpleComponent352Component;
  let fixture: ComponentFixture<SimpleComponent352Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent352Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
