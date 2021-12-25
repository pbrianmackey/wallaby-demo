import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent201Component } from './simple-component201.component';

describe('SimpleComponent201Component', () => {
  let component: SimpleComponent201Component;
  let fixture: ComponentFixture<SimpleComponent201Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent201Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
