import { Component } from '@angular/core';
import { Hero } from './Hero.model';

@Component({
    selector : 'com-HeroForm',
    templateUrl : './HeroForm.template.html',
    styleUrls : [ './HeroForm.style.css' ]
})
export class HeroFromComponent{
    powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];
    model = new Hero(18,'Dr IQ',this.powers[0],'chuck Overstreet');
    submitted = false;
    onSubmit(){ this.submitted = true; }
    newHero(){ this.model = new Hero(42,'','',''); }
    get diagnostic(){ return JSON.stringify(this.model)}
}