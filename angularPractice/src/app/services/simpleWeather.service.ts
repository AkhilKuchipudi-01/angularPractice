import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // We use Open-Meteo because it supports CORS and doesn't need an API Key
  private geoUrl = 'https://geocoding-api.open-meteo.com/v1/search';
  private weatherUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    // Step 1: Find city coordinates (lat/long)
    return this.http.get(`${this.geoUrl}?name=${city}&count=1`).pipe(
      switchMap((geo: any) => {
        const loc = geo.results[0];
        // Step 2: Get weather using those coordinates
        return this.http.get(`${this.weatherUrl}?latitude=${loc.latitude}&longitude=${loc.longitude}&current_weather=true`);
      })
    );
  }
}