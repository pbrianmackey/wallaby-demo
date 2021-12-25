import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent172Component } from './simple-component172.component';

describe('SimpleComponent172Component', () => {
  let component: SimpleComponent172Component;
  let fixture: ComponentFixture<SimpleComponent172Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent172Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
