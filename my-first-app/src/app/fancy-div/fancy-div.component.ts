import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fancy-div',
  templateUrl: './fancy-div.component.html',
  styleUrls: ['./fancy-div.component.css'],
  providers: [DataService]
})
export class FancyDivComponent implements OnInit {

  cnt = 0
  constructor(
    private ds: DataService // injection
  ) { }

  ngOnInit(): void {
    this.cnt = this.ds.cnt
  }

  onFnClk() {
    this.cnt = this.ds.cnt++
  }

}
