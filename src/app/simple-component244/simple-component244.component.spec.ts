import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent244Component } from './simple-component244.component';

describe('SimpleComponent244Component', () => {
  let component: SimpleComponent244Component;
  let fixture: ComponentFixture<SimpleComponent244Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent244Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
