import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent59Component } from './simple-component59.component';

describe('SimpleComponent59Component', () => {
  let component: SimpleComponent59Component;
  let fixture: ComponentFixture<SimpleComponent59Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent59Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
