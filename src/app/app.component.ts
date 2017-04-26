import { Component } from '@angular/core';
import { Hero } from './app.component.model.hero';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
    heroes = [
        new Hero(1,'windstorm'),
        new Hero(2,'Bombasto'),
        new Hero(20,'Tornado'),
        new Hero(11,'zx')
    ];
    myHero = this.heroes[0];
}
