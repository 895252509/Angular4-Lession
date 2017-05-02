import { Component, OnInit } from '@angular/core';

import { Hero } from "./Hero.model";
import { HeroService } from "./Hero.service";

@Component({
    moduleId: module.id,
    selector: 'hero-dashboard',
    templateUrl: './Dashboard.component.html',
    styleUrls: ['./Dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}