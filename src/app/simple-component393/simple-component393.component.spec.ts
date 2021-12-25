import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent393Component } from './simple-component393.component';

describe('SimpleComponent393Component', () => {
  let component: SimpleComponent393Component;
  let fixture: ComponentFixture<SimpleComponent393Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent393Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
