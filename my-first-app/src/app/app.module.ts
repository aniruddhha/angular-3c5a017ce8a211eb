import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FancyDivComponent } from './fancy-div/fancy-div.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyDivComponent,
    DataBindingComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // launching -> root module
})
export class AppModule { }
