import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent110Component } from './simple-component110.component';

describe('SimpleComponent110Component', () => {
  let component: SimpleComponent110Component;
  let fixture: ComponentFixture<SimpleComponent110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent110Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
