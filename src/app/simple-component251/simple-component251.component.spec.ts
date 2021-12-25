import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent251Component } from './simple-component251.component';

describe('SimpleComponent251Component', () => {
  let component: SimpleComponent251Component;
  let fixture: ComponentFixture<SimpleComponent251Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent251Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
