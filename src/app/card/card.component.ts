import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    cardData: Object;
    cardLoaded: boolean;

    constructor(private service: WeatherService) { 
        this.cardData = new Object();
    }

    ngOnInit() {
        this.service.query('kochi').subscribe(res => {
            console.log(`card.component.init() => ${JSON.stringify(res)}`);
            this.cardData = res;
            this.cardLoaded = true;
        }, err => {
            console.log(`Error => ${err.statusText}, Error code => ${err.status}`);
        });
    }
}
