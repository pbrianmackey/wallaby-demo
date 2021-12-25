import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent28Component } from './simple-component28.component';

describe('SimpleComponent28Component', () => {
  let component: SimpleComponent28Component;
  let fixture: ComponentFixture<SimpleComponent28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent28Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
