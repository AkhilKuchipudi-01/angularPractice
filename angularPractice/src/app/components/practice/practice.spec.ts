import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice } from './practice';

describe('Practice', () => {
  let component: Practice;
  let fixture: ComponentFixture<Practice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Practice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
