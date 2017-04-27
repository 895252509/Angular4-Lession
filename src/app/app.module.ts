import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent,TourOfHeroes } from './app.component';
import { HeroFromComponent } from './HeroForm.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroFromComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [  ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
