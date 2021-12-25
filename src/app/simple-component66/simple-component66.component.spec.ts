import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent66Component } from './simple-component66.component';

describe('SimpleComponent66Component', () => {
  let component: SimpleComponent66Component;
  let fixture: ComponentFixture<SimpleComponent66Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent66Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
