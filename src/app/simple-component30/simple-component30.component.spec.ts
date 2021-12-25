import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent30Component } from './simple-component30.component';

describe('SimpleComponent30Component', () => {
  let component: SimpleComponent30Component;
  let fixture: ComponentFixture<SimpleComponent30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
