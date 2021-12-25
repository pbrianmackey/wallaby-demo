import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent121Component } from './simple-component121.component';

describe('SimpleComponent121Component', () => {
  let component: SimpleComponent121Component;
  let fixture: ComponentFixture<SimpleComponent121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent121Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
