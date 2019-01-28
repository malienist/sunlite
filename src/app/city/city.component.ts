import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
    selector: 'app-city',
    templateUrl: './city.component.html'
})
export class CityComponent implements OnInit {
    cityId: string;
    cardData: Object;
    cardLoaded: boolean;
    nodata: boolean;
    forecast: Object;
    forecastLoaded: boolean = false;

    constructor(private route: ActivatedRoute, private service: WeatherService) { 
        this.route.params.subscribe(params => this.cityId = params['id']);
        console.log('city.component.constructor() - ', `city/${this.cityId}`);
    }

    ngOnInit() {
        //retrieve weather
        this.service.queryById(this.cityId).subscribe(res => {
            this.cardData = res;
            this.cardLoaded = true;
            this.nodata = false;
        }, err => {
            console.log(`city.component.querybyid.error => ${err.statusText}, Error code => ${err.status}`);
        });
        //retrieve forecast
        this.service.forecast(this.cityId).subscribe(res => {
            this.forecast = res;
            console.log(`forecast data => ${res}`);
            this.forecastLoaded = true;
        }, err => {
            console.log(`city.component.forecast.error => ${err.statusText}, Error code => ${err.status}`);
        });
    }

}
