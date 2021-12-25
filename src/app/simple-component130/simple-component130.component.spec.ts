import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent130Component } from './simple-component130.component';

describe('SimpleComponent130Component', () => {
  let component: SimpleComponent130Component;
  let fixture: ComponentFixture<SimpleComponent130Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent130Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
