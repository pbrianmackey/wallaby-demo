import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent266Component } from './simple-component266.component';

describe('SimpleComponent266Component', () => {
  let component: SimpleComponent266Component;
  let fixture: ComponentFixture<SimpleComponent266Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent266Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
