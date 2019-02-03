import { Component, OnInit } from '@angular/core';
import { strictEqual } from 'assert';

@Component({
    selector: 'app-card-container',
    templateUrl: './card-container.component.html'
})
export class CardContainerComponent implements OnInit {
    location: Array<string>;

    constructor() { 
        this.location = [
            'mangalore', 'aluva', 'delhi', 'chicago', 'norway'
        ];
    }

    ngOnInit() {
    }

}
