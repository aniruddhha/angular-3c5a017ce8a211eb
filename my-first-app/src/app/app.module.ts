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
import { PipesComponent } from './pipes/pipes.component';
import { CustPipe } from './cust.pipe';
import { IpComponent } from './ip/ip.component';
import { OpComponent } from './op/op.component';
import { CountrySelectionComponent } from './country-selection/country-selection.component';
import { CityDropdownComponent } from './city-dropdown/city-dropdown.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyDivComponent,
    DataBindingComponent,
    DirectivesComponent,
    DataTableComponent,
    ServiceComponent,
    PipesComponent,
    CustPipe,
    IpComponent,
    OpComponent,
    CountrySelectionComponent,
    CityDropdownComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Template Driven Forms
  ], // providers: [DataService], // module level

  bootstrap: [AppComponent] // launching -> root module
})
export class AppModule { }
