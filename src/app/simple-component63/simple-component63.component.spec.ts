import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent63Component } from './simple-component63.component';

describe('SimpleComponent63Component', () => {
  let component: SimpleComponent63Component;
  let fixture: ComponentFixture<SimpleComponent63Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent63Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
