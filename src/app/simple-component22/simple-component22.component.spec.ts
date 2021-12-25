import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent22Component } from './simple-component22.component';

describe('SimpleComponent22Component', () => {
  let component: SimpleComponent22Component;
  let fixture: ComponentFixture<SimpleComponent22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
