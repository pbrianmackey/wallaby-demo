import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent275Component } from './simple-component275.component';

describe('SimpleComponent275Component', () => {
  let component: SimpleComponent275Component;
  let fixture: ComponentFixture<SimpleComponent275Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent275Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
