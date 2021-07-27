import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({ // decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  cl = ''
  country = ''

  constructor(

  ) {

  }

  clkEv(cl: string) {
    console.log('event came out')
    this.cl = cl
  }

  fn(cnt: string) {
    this.country = cnt
    console.log(cnt)
  }
}
