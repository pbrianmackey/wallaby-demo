import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent404Component } from './simple-component404.component';

describe('SimpleComponent404Component', () => {
  let component: SimpleComponent404Component;
  let fixture: ComponentFixture<SimpleComponent404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
