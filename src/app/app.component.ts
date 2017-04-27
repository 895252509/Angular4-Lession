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


@Component({
    selector: 'app-input',
    template : `
        <input (keyup)="onKey($event)" />
        <p>{{values}}</p>
    `,
    //Url: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class InputComponent {
    values = '';
    onKey(e:any){
        console.log(this);
        this.values+= e.target.value+' | ';
    }
}
