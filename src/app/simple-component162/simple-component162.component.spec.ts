import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent162Component } from './simple-component162.component';

describe('SimpleComponent162Component', () => {
  let component: SimpleComponent162Component;
  let fixture: ComponentFixture<SimpleComponent162Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent162Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
