import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent310Component } from './simple-component310.component';

describe('SimpleComponent310Component', () => {
  let component: SimpleComponent310Component;
  let fixture: ComponentFixture<SimpleComponent310Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent310Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
