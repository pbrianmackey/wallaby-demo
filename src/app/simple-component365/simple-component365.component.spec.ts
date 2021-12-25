import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent365Component } from './simple-component365.component';

describe('SimpleComponent365Component', () => {
  let component: SimpleComponent365Component;
  let fixture: ComponentFixture<SimpleComponent365Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent365Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
