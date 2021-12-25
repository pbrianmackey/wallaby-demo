import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent136Component } from './simple-component136.component';

describe('SimpleComponent136Component', () => {
  let component: SimpleComponent136Component;
  let fixture: ComponentFixture<SimpleComponent136Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent136Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
