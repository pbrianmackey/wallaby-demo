import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent84Component } from './simple-component84.component';

describe('SimpleComponent84Component', () => {
  let component: SimpleComponent84Component;
  let fixture: ComponentFixture<SimpleComponent84Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent84Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
