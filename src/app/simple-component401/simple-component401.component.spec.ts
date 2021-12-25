import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent401Component } from './simple-component401.component';

describe('SimpleComponent401Component', () => {
  let component: SimpleComponent401Component;
  let fixture: ComponentFixture<SimpleComponent401Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent401Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
