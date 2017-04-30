import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { HeroService } from "./Hero.service";
import { Hero } from "./Hero.model";

@Component({
    selector: 'my-heroes',
    templateUrl: 'Heroes.component.html',
    styleUrls: ['./Heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private router: Router,
    private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
