import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSwitchBtn } from './theme-switch-btn';

describe('ThemeSwitchBtn', () => {
  let component: ThemeSwitchBtn;
  let fixture: ComponentFixture<ThemeSwitchBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemeSwitchBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeSwitchBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
