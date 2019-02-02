import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    error: boolean;

    constructor(private service: WeatherService, private router: Router) { 
        this.error = false;
    }

    ngOnInit() {
    }
    
    searchInfo(city: string){
        this.service.query(city).subscribe(res => {
            let id = res.id;
            this.router.navigate(['/city', id]);
        }, (err) => {
            this.error = true;
        });
    }
}
