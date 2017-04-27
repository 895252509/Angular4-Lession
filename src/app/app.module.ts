import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent,InputComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        InputComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [ ],
    bootstrap: [ AppComponent,InputComponent ]
})
export class AppModule { }
