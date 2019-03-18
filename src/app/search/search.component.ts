import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';
import { WeatherInfo } from '../weather-info';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    error: boolean;
    fetch: boolean;

    constructor(private service: WeatherService, private router: Router) { 
        this.error = false;
        this.fetch = false;
    }

    ngOnInit() {
    }
    
    searchInfo(city: string){
        this.error = false;
        this.fetch = true;
        this.service.query(city).subscribe(res => {
            let response = <WeatherInfo>res;
            this.router.navigate(['/city', response.id]);
        }, (err) => {
            this.fetch = false;
            this.error = true;
            console.log(`search.component.searchInfo() - error received - ${err}`);
        });
    }
}
