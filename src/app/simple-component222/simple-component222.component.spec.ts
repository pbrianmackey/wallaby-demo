import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent222Component } from './simple-component222.component';

describe('SimpleComponent222Component', () => {
  let component: SimpleComponent222Component;
  let fixture: ComponentFixture<SimpleComponent222Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent222Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
