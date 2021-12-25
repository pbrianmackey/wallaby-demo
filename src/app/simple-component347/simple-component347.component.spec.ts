import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent347Component } from './simple-component347.component';

describe('SimpleComponent347Component', () => {
  let component: SimpleComponent347Component;
  let fixture: ComponentFixture<SimpleComponent347Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent347Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
