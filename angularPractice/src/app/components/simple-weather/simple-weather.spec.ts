import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleWeather } from './simple-weather';

describe('SimpleWeather', () => {
  let component: SimpleWeather;
  let fixture: ComponentFixture<SimpleWeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleWeather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleWeather);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
