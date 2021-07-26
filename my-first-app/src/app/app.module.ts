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
    OpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ], // providers: [DataService], // module level
 
  bootstrap: [AppComponent] // launching -> root module
})
export class AppModule { }
