import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Debouncing } from './debouncing';

describe('Debouncing', () => {
  let component: Debouncing;
  let fixture: ComponentFixture<Debouncing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Debouncing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Debouncing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
