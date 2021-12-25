import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent394Component } from './simple-component394.component';

describe('SimpleComponent394Component', () => {
  let component: SimpleComponent394Component;
  let fixture: ComponentFixture<SimpleComponent394Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent394Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
