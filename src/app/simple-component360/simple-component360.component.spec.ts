import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent360Component } from './simple-component360.component';

describe('SimpleComponent360Component', () => {
  let component: SimpleComponent360Component;
  let fixture: ComponentFixture<SimpleComponent360Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent360Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
