import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent,TourOfHeroes } from './app.component';
import { HeroFromComponent } from './HeroForm.component';
import { InjectorDemoComponent } from "./InjectorDemo.component";
import { LoggerService } from "./Logger.service";

@NgModule({
    declarations: [
        AppComponent,
        HeroFromComponent,
        InjectorDemoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [ LoggerService ],
    bootstrap: [ AppComponent,InjectorDemoComponent ]
})
export class AppModule { }
