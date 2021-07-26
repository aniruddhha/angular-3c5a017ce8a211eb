import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FancyDivComponent } from './fancy-div/fancy-div.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ServiceComponent } from './service/service.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    FancyDivComponent,
    DataBindingComponent,
    DirectivesComponent,
    DataTableComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ], // providers: [DataService], // module level
 
  bootstrap: [AppComponent] // launching -> root module
})
export class AppModule { }
