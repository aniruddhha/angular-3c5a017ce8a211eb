import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FancyDivComponent } from './fancy-div/fancy-div.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyDivComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // launching -> root module
})
export class AppModule { }
