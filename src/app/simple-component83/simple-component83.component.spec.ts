import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent83Component } from './simple-component83.component';

describe('SimpleComponent83Component', () => {
  let component: SimpleComponent83Component;
  let fixture: ComponentFixture<SimpleComponent83Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent83Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
