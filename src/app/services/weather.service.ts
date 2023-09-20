import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '3cd68e230aff6fd5f8153a2f0c28a45e';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    const params = {
      q: city,
      appid: this.apiKey,
      units: 'metric',
    };
    return this.http.get(this.apiUrl, { params });
  }
}
