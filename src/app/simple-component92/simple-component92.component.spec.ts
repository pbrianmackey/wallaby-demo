import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent92Component } from './simple-component92.component';

describe('SimpleComponent92Component', () => {
  let component: SimpleComponent92Component;
  let fixture: ComponentFixture<SimpleComponent92Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent92Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
