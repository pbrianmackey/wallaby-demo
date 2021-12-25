import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent392Component } from './simple-component392.component';

describe('SimpleComponent392Component', () => {
  let component: SimpleComponent392Component;
  let fixture: ComponentFixture<SimpleComponent392Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent392Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
