import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent116Component } from './simple-component116.component';

describe('SimpleComponent116Component', () => {
  let component: SimpleComponent116Component;
  let fixture: ComponentFixture<SimpleComponent116Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent116Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
