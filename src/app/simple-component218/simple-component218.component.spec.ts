import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent218Component } from './simple-component218.component';

describe('SimpleComponent218Component', () => {
  let component: SimpleComponent218Component;
  let fixture: ComponentFixture<SimpleComponent218Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent218Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
