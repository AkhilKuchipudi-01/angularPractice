import { Component } from '@angular/core';
import { WeatherService } from '../../services/simpleWeather.service';

@Component({
  selector: 'app-simple-weather',
  standalone: false,
  templateUrl: './simple-weather.html',
  styleUrl: './simple-weather.scss'
})
export class SimpleWeather {
  city: string = '';
  weather: any;
  error: string = '';

  constructor(private service: WeatherService) { }

  fetchWeather() {
    this.error = ''; // Reset error
    this.service.getWeather(this.city).subscribe({
      next: (data) => {
        this.weather = data;
      },
      error: (err) => {
        this.error = 'Failed to fetch weather. Check API key or City name.';
        console.error(err);
      }
    });
  }
}

