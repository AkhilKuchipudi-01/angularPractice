import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileResponsive } from './mobile-responsive';

describe('MobileResponsive', () => {
  let component: MobileResponsive;
  let fixture: ComponentFixture<MobileResponsive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileResponsive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileResponsive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
