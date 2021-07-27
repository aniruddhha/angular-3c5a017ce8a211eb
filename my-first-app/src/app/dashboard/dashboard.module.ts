import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ChatModule } from '../chat/chat.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ChatModule
  ],
  exports: [
    DashboardComponent,
    ChatModule
  ]
})
export class DashboardModule { }
