import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent42Component } from './simple-component42.component';

describe('SimpleComponent42Component', () => {
  let component: SimpleComponent42Component;
  let fixture: ComponentFixture<SimpleComponent42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent42Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
