import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-city',
    templateUrl: './city.component.html'
})
export class CityComponent implements OnInit {
    cityId: string;

    constructor(private route: ActivatedRoute) { 
        this.route.params.subscribe(params => this.cityId = params['id']);
    }

    ngOnInit() {
    }

}
