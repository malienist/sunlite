import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    localTime: string;
    localDate: string;

    constructor() { }

    ngOnInit() {
        this.localTime = [
            this.getHours(),
            this.getMinutes()
        ].join(':').toString();
        this.localDate  = [
            this.getDate(),
            this.getMonth(),
            new Date().getFullYear().toString().substr(2, 3)
        ].join(' ').toString();
    }
    
    getHours(): string {
        if(parseInt(new Date().getHours().toString()) <= 9) {
            return '0' + (new Date().getHours()).toString();
        } 
        return (new Date().getHours()).toString();
    }

    getMinutes(): string {
        if(parseInt(new Date().getMinutes().toString()) <= 9) {
            return '0' + (new Date().getMinutes()).toString();
        }
        return (new Date().getMinutes().toString());
    }

    getMonth(): string {
        let month: Array<string> = [
            "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"
        ];
        return month[parseInt((new Date().getMonth()).toString())];
    }

    getDate(): string {
        if(parseInt(new Date().getDate().toString()) <= 9) {
            return '0' + (new Date().getDate().toString());
        }
        return (new Date().getDate()).toString();
    }
}
