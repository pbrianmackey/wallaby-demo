import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent79Component } from './simple-component79.component';

describe('SimpleComponent79Component', () => {
  let component: SimpleComponent79Component;
  let fixture: ComponentFixture<SimpleComponent79Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent79Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
