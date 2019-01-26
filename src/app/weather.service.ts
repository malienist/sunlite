import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// export const API_KEY = 'b6bc51f2affd7dcb8cbe7ff2b9a685f5';
// export const API_URL = 'api.openweathermap.org/data/2.5/weather';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    static API_URL = 'http://api.openweathermap.org/data/2.5/weather';
    static API_KEY = 'b6bc51f2affd7dcb8cbe7ff2b9a685f5';
    
    constructor(private http: HttpClient) {
        
    }

    query(city: string): Observable<Object> {
        let queryUrl = `${WeatherService.API_URL}?q=${city}&appid=${WeatherService.API_KEY}`;
        console.log(`weather.service.query().query = ${queryUrl}`);
        return this.http.get(queryUrl).pipe(
            map(data => {
                return data
            })
        );
    }
}
