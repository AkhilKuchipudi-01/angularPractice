import { Component, OnInit } from '@angular/core';
import { WeatherService, WeatherData } from '../../services/weather.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-weather',
  standalone: false,
  templateUrl: './weather.html',
  styleUrl: './weather.scss',
})
export class Weather implements OnInit {
  weatherData?: WeatherData;
  loading = false;
  error = '';

  // Common cities for exam purpose
  cities = [
    { name: 'London', lat: 51.5074, lon: -0.1278 },
    { name: 'New York', lat: 40.7128, lon: -74.0060 },
    { name: 'Tokyo', lat: 35.6895, lon: 139.6917 },
    { name: 'Berlin', lat: 52.5200, lon: 13.4050 },
    { name: 'Sydney', lat: -33.8688, lon: 151.2093 }
  ];

  selectedCity = this.cities[0];

  constructor(
    private weatherService: WeatherService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.fetchWeather();
  }

  fetchWeather() {
    this.loading = true;
    this.error = '';
    this.weatherService.getWeather(this.selectedCity.lat, this.selectedCity.lon).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.loading = false;
        this.toastService.success(`Weather updated for ${this.selectedCity.name}`);
      },
      error: (err) => {
        this.error = 'Failed to fetch weather data.';
        this.loading = false;
        this.toastService.error(this.error);
      }
    });
  }

  onCityChange(event: any) {
    const cityName = event.target.value;
    this.selectedCity = this.cities.find(c => c.name === cityName) || this.cities[0];
    this.fetchWeather();
  }

  getWeatherIcon(code: number): string {
    // WMO Weather interpretation codes (WW)
    if (code === 0) return 'pi pi-sun text-warning';
    if (code >= 1 && code <= 3) return 'pi pi-cloud text-secondary';
    if (code >= 45 && code <= 48) return 'pi pi-align-justify text-secondary';
    if (code >= 51 && code <= 67) return 'pi pi-cloud-download text-primary';
    if (code >= 71 && code <= 77) return 'pi pi-snowflake text-info';
    if (code >= 80 && code <= 82) return 'pi pi-cloud-rain text-primary';
    if (code >= 95) return 'pi pi-bolt text-danger';
    return 'pi pi-question-circle';
  }
}

