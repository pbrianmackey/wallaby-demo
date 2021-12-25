import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent321Component } from './simple-component321.component';

describe('SimpleComponent321Component', () => {
  let component: SimpleComponent321Component;
  let fixture: ComponentFixture<SimpleComponent321Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent321Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
