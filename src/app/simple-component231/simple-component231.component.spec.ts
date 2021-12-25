import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent231Component } from './simple-component231.component';

describe('SimpleComponent231Component', () => {
  let component: SimpleComponent231Component;
  let fixture: ComponentFixture<SimpleComponent231Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent231Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
