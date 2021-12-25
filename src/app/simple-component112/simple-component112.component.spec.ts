import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent112Component } from './simple-component112.component';

describe('SimpleComponent112Component', () => {
  let component: SimpleComponent112Component;
  let fixture: ComponentFixture<SimpleComponent112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent112Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
