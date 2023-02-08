import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css'],
})
export class FetchDataComponent {
  public forecasts?: WeatherForecast[];
  constructor(http: HttpClient) {
    http
      .get<WeatherForecast[]>(environment.baseUrl + 'api/weatherforecast')
      .subscribe({
        next: (result) => {
          this.forecasts = result;
        },
        error: (error) => console.error(error),
      });
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
