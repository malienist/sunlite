import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
    @Input() location: string;
    cardData: Object;
    cardLoaded: boolean;
    nodata: boolean;

    constructor(private service: WeatherService) { 

    }

    ngOnInit() {
        this.service.query(this.location).subscribe(res => {
            console.log(`card.component.init() => ${JSON.stringify(res)}`);
            this.cardData = res;
            this.cardLoaded = true;
            this.nodata = false;
        }, err => {
            console.log(`Error => ${err.statusText}, Error code => ${err.status}`);
        });
    }

    strip(str: string): string {
        return str.toString().substring(0, 2);
    }
}
