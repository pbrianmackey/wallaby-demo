import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent262Component } from './simple-component262.component';

describe('SimpleComponent262Component', () => {
  let component: SimpleComponent262Component;
  let fixture: ComponentFixture<SimpleComponent262Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent262Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
