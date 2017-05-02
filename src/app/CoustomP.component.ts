import { Component, OnInit,Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'p',
    templateUrl: 'CoustomP.component.html'
})

export class CoustomPComponent implements OnInit {
    @Input() pstr:string=''; 

    constructor() { }

    ngOnInit() {
        console.log("P init");
     }
}