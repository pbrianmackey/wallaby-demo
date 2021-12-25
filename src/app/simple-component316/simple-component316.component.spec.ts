import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent316Component } from './simple-component316.component';

describe('SimpleComponent316Component', () => {
  let component: SimpleComponent316Component;
  let fixture: ComponentFixture<SimpleComponent316Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent316Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
