import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers: [DataService] // component level
})
export class ServiceComponent implements OnInit {

  cnt = 0;

  constructor(
    private ds: DataService //injection
  ) { }

  ngOnInit(): void {
  }

  onSerClk() {
    this.cnt = this.ds.cnt++
  }
}
