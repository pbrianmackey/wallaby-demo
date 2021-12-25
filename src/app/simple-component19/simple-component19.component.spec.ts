import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent19Component } from './simple-component19.component';

describe('SimpleComponent19Component', () => {
  let component: SimpleComponent19Component;
  let fixture: ComponentFixture<SimpleComponent19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
