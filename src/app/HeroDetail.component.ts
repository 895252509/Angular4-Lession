import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,Params } from "@angular/router";
import { Location } from "@angular/common";

import { Hero } from "./Hero.model";
import { HeroService } from "./Hero.service";

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: './HeroDetail.component.html',
    styleUrls:['./HeroDetail.component.css']
})

export class HeroDetailComponent implements OnInit {
    @Input() hero:Hero ;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}


    ngOnInit() {
          this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
     }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
        .then(() => this.goBack());
    }
}