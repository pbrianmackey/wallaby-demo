import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent388Component } from './simple-component388.component';

describe('SimpleComponent388Component', () => {
  let component: SimpleComponent388Component;
  let fixture: ComponentFixture<SimpleComponent388Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent388Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
