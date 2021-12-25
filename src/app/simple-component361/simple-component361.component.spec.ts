import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent361Component } from './simple-component361.component';

describe('SimpleComponent361Component', () => {
  let component: SimpleComponent361Component;
  let fixture: ComponentFixture<SimpleComponent361Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent361Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
