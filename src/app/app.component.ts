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

    addHero(v:string){
        if(v === null || v === '')
            return;
        var newHero = new Hero(1,v);
        this.heroes.push(newHero);
    }
}


@Component({
    selector: 'app-input',
    template : `
        <input #box2 (keyup.enter)="onKeyEnter(box2.value)" (keyup)="onKey(box2.value)"/>
        <button (click)="onBtnDown(box2.value)">Add</button>
        <p>{{value}}</p>
    `,
    //绑定事件，过滤Enter事件，使用模板引用变量
    //Url: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class InputComponent {
    values = '';
    value = '';
    onKey(v:string){
        this.values = v;
    }
    onKeyEnter(v:string){ this.value= this.values}
    onBtnDown(v:string){ 
        var newHero = new Hero(1,v);

    }
}
