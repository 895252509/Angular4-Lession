import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent,TourOfHeroes } from './app.component';
import { HeroFromComponent } from './HeroForm.component';
import { InjectorDemoComponent } from "./InjectorDemo.component";
import { TemplateSyntaxDemoComponent } from "./TemplateSyntax.component";
import { MyBtnComponent } from "./MyButton.component";
import { CoustomPComponent } from "./CoustomP.component";
import { HeroDetailComponent } from "./HeroDetail.component";
import { HeroesComponent } from "./Heroes.component";
import { DashboardComponent } from "./Dashboard.component";

import { LoggerService } from "./Logger.service";
import { HeroService } from "./Hero.service";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent,
        HeroFromComponent,
        TemplateSyntaxDemoComponent,
        MyBtnComponent,
        InjectorDemoComponent,
        TourOfHeroes,
        CoustomPComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [ LoggerService,HeroService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }