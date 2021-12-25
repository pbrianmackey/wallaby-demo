import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent305Component } from './simple-component305.component';

describe('SimpleComponent305Component', () => {
  let component: SimpleComponent305Component;
  let fixture: ComponentFixture<SimpleComponent305Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent305Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
